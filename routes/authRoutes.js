const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', passport.authenticate('servicenow'));

router.get('/servicenow/callback', passport.authenticate('servicenow', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/servicenow/incidents/sample');
    }
);

router.get('logout',(req,res)=>{
    req.logout();
    res.send('Logged out');
});

module.exports = router;