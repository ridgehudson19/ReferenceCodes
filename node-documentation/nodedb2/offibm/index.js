const odbc = require("odbc");

const cn = "DSN=usrProd;UID=rhudson19;PWD=rhudson14";

odbc.connect(cn, (error, connection) => {
  connection.query(
    "SELECT * FROM RHUDSON191.CRIMEDATA",
    (error, result) => {
      if (error) {
        throw error;
      }
      console.log(result[0].OFFENDERFN + ' ' +result[0].OFFENDERLN );
    }
  );
});
