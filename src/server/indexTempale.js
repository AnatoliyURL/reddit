export const indexTemplate = (content, token) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
        window.__token__ = '${token}'
    </script>
</head>
<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
</body>
</html>`