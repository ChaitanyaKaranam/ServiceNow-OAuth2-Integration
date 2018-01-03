const express = require('express');
const app = express();
const authRoute = require('./routes/authRoutes');
const serviceNowRoutes = require('./routes/serviceNowRoutes');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
require('./services/passport');

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('ServiceNow OAuth Integration');
});

// Sessions to store Access Token
app.use(cookieSession({
    maxAge:1*24*60*60*1000, // 1 day
    keys:[keys.key]
}));

// Initialize passport to use sessions to store Access Token
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRoute);
app.use('/servicenow',serviceNowRoutes);

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));