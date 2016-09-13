//require the following modules
var exec = require('child_process').exec;
//List of globals follow
//other flags will be pushed into flagIn arr for primer3
var flagsIn = [];
//obj function container
var primer3 = {};

///////////////////
//primer3 Functions
primer3.run_ = function (inFile, outfile, flagArr) {
    //merge other flags from commandline into a single string
    if (flagArr.length < 3) {
        console.log('insufficient number of arguments');
    } else {
        for (var i = 3; i < flagArr.length; i++) {
            flagsIn.push(flagArr[i]);
        }
        //stringify
        var stringify = flagsIn.toString();
        //replace commas with spaces
        var flags = stringify.replace(/,/g, " ");
        //generate the commandline 
        var primer3Command = 'primer3_core <' + inFile + ' ' + flags;
        console.log('\n' + ' running...');
        //spawn child to run exec shell
        var child = exec(primer3Command, function (error, stdout, stderr) {
            if (error != null) {
                console.log(stderr);
            }
            console.log('\n' + ' finished!');
        });
    }
}

//export primer3 obj
module.exports = primer3;