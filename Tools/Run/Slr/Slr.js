//require the following modules
var exec = require('child_process').exec;
//other flags will be pushed into array
var otherflags = [];
//check the user's OS 
var isWin = /^win/.test(process.platform);
//obj function container
var Slr = {};

///////////////////
//Slr Functions
Slr.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    if (isWin == true) {
        var SlrCommand = 'Slr -seqfile ' + myfilePath + ' -treefile ' + flags + ' > ' + outFile;
    } else {
        var SlrCommand = './Slr -seqfile ' + myfilePath + ' ' + flags + ' > ' + outFile;
    }
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(SlrCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export Slr obj
module.exports = Slr;
