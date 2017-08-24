var express = require('express');
var router = express.Router();
const mysql = require('../modal/mySql.js');

router.post('/getArticles', function(req, res) {
	console.log('请求数据');
	mysql.query(`SELECT hj.avatar,hj.name,hg.* FROM allarticle hg left join user hj on hg.uid=hj.id WHERE 1`, function (error, results) {
		if (error) throw error;
		res.send(results);
	});
});

router.post('/getColle', function(req, res) {
	console.log('请求收藏集');
	
	mysql.query(`SELECT follow_id FROM follow WHERE user_id='${req.body.id}'`, function (error, results) {
		if (error) throw error;
		console.log(results);
		let cArr=[];
		for(let i=0; i<results.length; i++){
			mysql.query(`SELECT * FROM collections WHERE id='${results[i].follow_id}'`, function (err, result) {
				if(err) throw err;
				cArr.push(result[0]);
				if(i==results.length-1){
					console.log(cArr);
					res.send(cArr);
				}
			});
		}
	});
});

module.exports = router;