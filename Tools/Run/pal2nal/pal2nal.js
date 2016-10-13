//require the following modules
var exec = require('child_process').exec;
//other flags will be pushed into array
var otherflags = [];
//obj function container
var pal2nal = {};

///////////////////
//pal2nal Functions
pal2nal.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var pal2nalCommand = 'perl pal2nal.pl ' + myfilePath + ' ' + flags + ' > ' + outFile;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(pal2nalCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export pal2nal obj
module.exports = pal2nal;
