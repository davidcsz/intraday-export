function auth(app) { // 'app' is taken from the config file
    var auth_params = encodeURI(
        "?response_type=" + app.response_type +
        "&client_id=" + app.client_id +
        "&redirect_uri=" + app.redirect_uri +
        "&scope=" + app.scope +
        "&prompt=" + app.prompt
    );
    var auth_url = app.auth_host + auth_params;

    window.location = auth_url;
}

function pullToken(url) {
    return url.slice(url.lastIndexOf('=') + 1, url.length);
}
