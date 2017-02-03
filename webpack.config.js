var path = require("path");
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    }
};