//require the following modules
var exec = require('child_process').exec;
//globals
var otherflags = [];
//obj function container
var bowtie2 = {};

///////////////////
//bowtie2 FUNCTIONS
bowtie2.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var bowtie2Command = 'bowtie2 -x ' + myfilePath + ' -S ' + outFile + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(bowtie2Command, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export bowtie2 obj
module.exports = bowtie2;
