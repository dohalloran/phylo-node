//require the following modules
var exec = require('child_process').exec;
//globals
var otherflags = [];
//obj function container
var kalign = {};

///////////////////
//Kalign FUNCTIONS
kalign.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var alignCommand = 'kalign -i ' + myfilePath + ' -o ' + outFile + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(alignCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export kalign obj
module.exports = kalign;