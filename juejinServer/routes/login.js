var express = require('express');
var router = express.Router();
// const sha256 = require('../modal/crypto.js');
const mysql = require('../modal/mySql.js');


router.post('/getUser', function(req, res) {
	mysql.query(`SELECT * FROM user WHERE email='${req.body.count}' or phone='${req.body.count}'`, function (error, results, fields) {
		if (error) throw error;
		
		if(results.length==0){
			res.send({success:false,results:results});
		}else{
			if(results[0].password === req.body.paw){
				res.send({success:true,results:results});
			}else{
				res.send({success:false,results:results});
			}
		}
	});
});

module.exports = router;