const { result } = require('./sql-conn');

async function user_info(query) {
   return await result(query)
}

module.exports = {
    user_info
}