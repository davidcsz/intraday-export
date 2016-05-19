// Main application
var url = window.location.toString();
var access_token;

if(url.indexOf('#') == -1) {
    // Send user through auth
    auth(app);
} else {
    access_token = pullToken(url);
}
