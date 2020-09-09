const mysql = require("mysql");

const accesInfo = {
    host: process.env.DDBB_HOST,
    user: process.env.DDBB_USER,
    password: process.env.DDBB_PASSSWORD,
    database: process.env.DDBB_NAME,
};

module.exports = function (query) {

    return new Promise((resolve, reject) => {

        const connection = mysql.createConnection(accesInfo);
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err) reject(err);
            resolve(rows);
        });

        connection.end();

    });



};