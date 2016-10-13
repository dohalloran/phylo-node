//require the following modules
var exec = require('child_process').exec;
//other flags will be pushed into Arrflags arr for PhyML
var otherflags = [];
//obj function container
var codeml = {};

///////////////////
//codeml Functions
codeml.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var codemlCommand = 'codeml ' + myfilePath;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(codemlCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export codeml obj
module.exports = codeml;