var fs = require('fs');
var path = require('path');
var cwd = process.cwd();

var rootDir;

if (fs.existsSync(path.join(cwd, 'package.json'))) {
    rootDir = cwd;
} else {
    var pos = __dirname.indexOf('/node_modules/');
    if (pos === -1) {
        rootDir = path.normalize(__dirname, '..');
    } else {
        rootDir = __dirname.substring(0, pos);
    }
}

exports.get = function() {
    return rootDir;
};