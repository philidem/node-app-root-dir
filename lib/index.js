var GLOBAL_KEY = 'app-root-dir';
var _rootDir;

exports.get = function() {
    var dir = global[GLOBAL_KEY];
    if (dir) {
        return dir;
    }

    if (_rootDir === undefined) {
        var fs = require('fs');
        var path = require('path');

        var cwd = process.cwd();
        if (fs.existsSync(path.join(cwd, 'package.json'))) {
            _rootDir = cwd;
        } else {
            var pos = __dirname.indexOf('/node_modules/');
            if (pos === -1) {
                _rootDir = path.normalize(__dirname, '..');
            } else {
                _rootDir = __dirname.substring(0, pos);
            }
        }
    }

    return _rootDir;
};

exports.set = function(dir) {
    global[GLOBAL_KEY] = _rootDir = dir;
};