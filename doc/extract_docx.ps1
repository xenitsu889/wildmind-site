Add-Type -AssemblyName 'System.IO.Compression.FileSystem'
$zip = [System.IO.Compression.ZipFile]::OpenRead('e:\Wildmind Site\wildmind-site\doc\Copy of AI Strategy CONSULTING SERVICES.docx')
foreach($entry in $zip.Entries) {
    if($entry.Name -like '*.xml' -and $entry.FullName -like 'word/document*') {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $content = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        $cleaned = $content -replace '<[^>]+>', "`n"
        $cleaned = $cleaned -replace '(\r?\n\s*)+', "`n"
        Write-Output $cleaned
    }
}
$zip.Dispose()
