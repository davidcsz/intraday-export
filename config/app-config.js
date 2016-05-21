var app = {
    auth_host : 'https://www.fitbit.com/oauth2/authorize',
    client_id : '227DW9',
    response_type : 'token',
    scope : 'activity heartrate location nutrition profile settings sleep social weight',
    redirect_uri : 'http://192.168.0.222:8080', // Change based on ngrok
    prompt : 'login'
};
