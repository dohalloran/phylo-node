// execute multiple commands
exports.chain = function (commands, callback) {
    var nextCmd = function () {
        exports.execute(commands.shift(), function (err) {
            if (err) {
                callback(err);
            } else {
                if (commands.length) nextCmd();
                else callback(null);
            }
        });
    };
    nextCmd();
};


// execute a single shell command 
exports.execute = function (command, callback) {
    var child_process = require('child_process');
    var parts = command.split(/\s+/g);
    var p = child_process.spawn(parts[0], parts.slice(1), {
        stdio: 'inherit'
    });
    p.on('exit', function (code) {
        var err = null;
        if (code) {
            err = new Error('check pipe_example.js for correct syntax');
            err.code = code;
            err.command = command;
        }
        if (callback) callback(err);
    });
};