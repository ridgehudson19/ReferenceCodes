const db2i = require('idb-connector');
const dbconn = new db2i.dbconn();

dbconn.conn('*LOCAL');
let stm = new db2i.dbstmt(dbconn);
let sql = "select * from rhudson191.mathstudents";

stm.exec(sql, (res) => {
		res.forEach( (data) => console.log(data.STUDENTLN));
});