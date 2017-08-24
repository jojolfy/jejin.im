var express = require('express');
var router = express.Router();
const mysql = require('../modal/mySql.js');

router.post('/', function(req, res) {
	console.log('注册');
	// let arr=[];
	mysql.query(`SELECT * FROM user WHERE email='${req.body.count}' or phone='${req.body.count}'`, function (error, results) {
		if (error) throw error;
		// arr=results;
		if(results.length===0){
			if(req.body.count.indexOf('@')>0){
				mysql.query(`INSERT INTO user(name, password,email) VALUES ('${req.body.nick}', '${req.body.paw}','${req.body.count}')`, function (error, results) {
					if (error) throw error;
					res.send(true);
				});
			}else{
				mysql.query(`INSERT INTO user(name, password, phone) VALUES ('${req.body.nick}', '${req.body.paw}','${req.body.count}')`, function (error, results) {
					if (error) throw error;
					res.send(true);
				});
			}
		}else{
			res.send(false);
		}
	});
});

module.exports = router;
