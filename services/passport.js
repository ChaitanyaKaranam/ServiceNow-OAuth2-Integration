const passport = require('passport');
const OAuthStrategy = require('passport-oauth2');
const keys = require('../config/keys');

passport.use('servicenow',new OAuthStrategy({
    authorizationURL: 'https://dev21855.service-now.com/oauth_auth.do',
    tokenURL: 'https://dev21855.service-now.com/oauth_token.do',
    clientID: keys.serviceNowClientID,
    clientSecret: keys.serviceNowClientSecret,
    callbackURL: "http://localhost:5000/auth/servicenow/callback"
},
(accessToken,refreshToken,profile,done)=>{
    done(null,accessToken); //Extract Access Token from Callback to send it to Serialize
}));


passport.serializeUser((accessToken,done)=>{
    done(null,accessToken); // Add Access Token to req.session. 
});

passport.deserializeUser((accessToken,done)=>{
    done(null,accessToken); // Add access token to req.user by extracting information from req.session
});