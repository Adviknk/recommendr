require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected')

// connection.query('SELECT * FROM users', (err, results, fields) => {
//     console.log('Query results:');
//     console.log(results);
// })

const promiseConnection = connection.promise();

async function run(query) {
    try {
        const [results] = await promiseConnection.query(query);
        return results.length > 0;
    } catch (err) {
        return false;
    }
}

async function add(query, params) {
    try {
        const [results] = await promiseConnection.query(query, params);
        return true;
    } catch (err) {
        return false;
    }
}
module.exports = {
    run,
    add
}
        

// connection.end();