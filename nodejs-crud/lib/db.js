var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'LAPTOP-SIJIK1SF',
	user:'root',
	password:'b3th3b3st',
	database:'oamk'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;