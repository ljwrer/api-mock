/**
 * Created by Ray on 2016/5/16.
 */
var express = require('express');
var router = express.Router();
var tableController=require('../controller/table');
router.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
router.get('/table',tableController.check);
module.exports=router;
