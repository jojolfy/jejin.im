var express = require('express');
var router = express.Router();
const mysql = require('../modal/mySql.js');

router.post('/', function(req, res) {
	console.log('收藏集');
	mysql.query(`SELECT * FROM collections WHERE 1`, function(error, results, fields) {
		if(error) throw error;
		res.send(results);
	})
});

router.post('/add', function(req, res) {
	console.log('添加收藏集');
	console.log(req.body);
	mysql.query(`SELECT * FROM follow WHERE follow_id='${req.body.fi}' AND user_id='${req.body.ui}'`, function(error, results, fields) {
		if(error) throw error;
		if(results.length==0){
			mysql.query(`INSERT INTO follow(follow_id, user_id) VALUES ('${req.body.fi}','${req.body.ui}')`, function(error, results, fields) {
				if(error) throw error;
				res.send(results);
			})
		}else{
			res.send('已添加');
		}
	})
	
});

router.post('/del', function(req, res) {
	console.log('删除收藏集');
	console.log(req.body);
	mysql.query(`DELETE FROM follow WHERE follow_id='${req.body.fi}' AND user_id='${req.body.ui}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(results);
	})
});

module.exports = router;
