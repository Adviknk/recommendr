
var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
};

// module.exports.log = log;
// // Export it as a different name
// module.exports.endPointUrl = url;

module.exports = log;