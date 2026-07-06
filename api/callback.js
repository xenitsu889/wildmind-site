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

  if (!tokenPayload.access_token) {
    res.status(502).send('GitHub did not return an access token.');
    return;
  }

  const authData = JSON.stringify({
    token: tokenPayload.access_token,
    provider: 'github',
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>Signing in…</title></head>
<body>
<p>Completing GitHub sign-in…</p>
<script>
(function () {
  var authData = ${authData};
  var sent = false;

  function sendToken(origin) {
    if (sent || !window.opener) return;
    sent = true;
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify(authData),
      origin || '*'
    );
    window.removeEventListener('message', onMessage);
    setTimeout(function () { window.close(); }, 150);
  }

  function onMessage(e) {
    if (e.data === 'authorizing:github') {
      sendToken(e.origin);
    }
  }

  window.addEventListener('message', onMessage, false);

  if (window.opener) {
    window.opener.postMessage('authorizing:github', '*');
  } else {
    document.body.textContent = 'Sign-in popup lost its parent window. Close this tab and try again from /admin.';
  }
})();
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
};
