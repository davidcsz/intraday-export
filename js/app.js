// Main application
var url = window.location.toString();
var access_token;
var date = new Date();
var today = formatDate(
    date.getFullYear(),
    (date.getMonth() + 1),
    date.getDate()
);

if(url.indexOf('#') === -1) {
    // Send user through auth
    auth(app);
} else {
    access_token = pullToken(url);

    fetch('https://api.fitbit.com/1/user/-/activities/steps/date/' + today + '/1d.json', {
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
            console.log(typeof(response));
            return response.json();
        } else {
            throw new Error('Didn\'t receive JSON... ' + response);
            window.alert('Didn\'t receive JSON... ' + response);
        }
    }).then(function(json) {
        //console.log('JSON received...' + JSON.stringify(json));
        console.log(typeof(response));
        console.log(typeof(JSON.stringify(json)));
        window.alert('Steps: ' + JSON.stringify(json));
    });

    fetch('https://api.fitbit.com/1/user/-/activities/heart/date/' + today + '/1d.json', {
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
            console.log(typeof(response));
            return response.json();
        } else {
            throw new Error('Didn\'t receive JSON... ' + response);
            window.alert('Didn\'t receive JSON... ' + response);
        }
    }).then(function(json) {
        //console.log('JSON received...' + JSON.stringify(json));
        console.log(typeof(json));
        console.log(typeof(JSON.stringify(json)));
        window.alert('HR: ' + JSON.stringify(json));
    });
}
