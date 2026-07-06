module.exports = async (req, res) => {
  const code = req.query && req.query.code;
  if (!code) {
    res.status(400).send('Missing authorization code.');
    return;
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send('Missing GitHub OAuth environment variables.');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${protocol}://${host}/api/callback`;

  let tokenPayload;
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });
    tokenPayload = await response.json();
  } catch (err) {
    res.status(502).send('Failed to exchange authorization code.');
    return;
  }

  if (tokenPayload.error) {
    res.status(400).send(tokenPayload.error_description || tokenPayload.error);
    return;
  }

  const script = `<script>
(function () {
  var authData = ${JSON.stringify({ token: tokenPayload.access_token, provider: 'github' })};
  function sendToken(e) {
    if (e.data !== 'authorizing:github') return;
    window.opener.postMessage('authorization:github:success:' + JSON.stringify(authData), e.origin);
    window.removeEventListener('message', sendToken);
    window.close();
  }
  window.addEventListener('message', sendToken, false);
})();
</script>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(script);
};
