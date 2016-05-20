function processResponse(res) {
    if(!res.ok) {
        throw new Error('Fitbit API request failed: ' + res);
        window.alert('Fitbit API request failed: ' + res);
    }

    var type = res.headers.get('Content-Type');

    if(type && type.indexOf('application/json') !== -1) {
        return res.json();
    } else {
        throw new Error('Didn\'t receive JSON... ' + res);
        window.alert('Didn\'t receive JSON... ' + res);
    }
}
