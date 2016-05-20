// Main application
var url = window.location.toString();
var access_token;
var today = new Date();

if(url.indexOf('#') === -1) {
    // Send user through auth
    auth(app);
} else {
    access_token = pullToken(url);

    fetch('https://api.fitbit.com/1/user/-/activities/date/' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '.json', {
        method: 'GET',
        headers: new Headers({
            "Authorization": "Bearer " + access_token
        }),
        mode: 'cors'
    }).then(function(response) { // Processing response
        if(!response.ok) {
            throw new Error('Fitbit API request failed: ' + response);
            window.alert('Fitbit API request failed: ' + response);
        }

        var type = response.headers.get('Content-Type');

        if(type && type.indexOf('application/json') !== -1) {
            return response.json();
        } else {
            throw new Error('Didn\'t receive JSON... ' + response);
            window.alert('Didn\'t receive JSON... ' + response);
        }
    }).then(function(json) {
        console.log('JSON received...' + json);
        window.alert('Your steps today: ' + json['summary'].steps);
    });
}
