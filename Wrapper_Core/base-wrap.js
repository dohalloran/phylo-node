//require the following modules
var exec = require('child_process').exec;
//obj function container
var base_wrap = {};

///////////////////
//basic function call 
base_wrap.call_ = function (myfilePath, outFile, flagArr, callback) {
    //check that enough arguments are supplied
    if (process.argv.length >= 3) {
        //generate commandline
        var mkDirCommand = 'mkdir Output';
        console.log('\n' + ' made Output folder...');
        //spawn child process for new shell command
        var child = exec(mkDirCommand, function (error, stdout, stderr) {
            if (error != null) {
                console.log(stderr);
            }
        });
        //invoke callback and push in arguments
        callback(myfilePath, outFile, flagArr);
    } else {
        console.log('insufficient number of arguments');
    }
}

//export base_wrap obj
module.exports = base_wrap;