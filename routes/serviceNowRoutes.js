const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/incidents/sample',(req,res)=>{
    const options={
        url:`https://<INSTANCE>.service-now.com/api/now/v2/table/incident?sysparm_limit=1`,
        method:'get',
        headers:{
            'Authorization':`Bearer ${req.user}`
        }
    };
    axios(options).then((val)=>{
        res.send(val.data.result);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = router;
