//require the following modules
var exec = require('child_process').exec;
//other flags will be pushed into array
var argsArr = [];
//obj function container
var trimmomatic = {};

///////////////////
//trimmomatic Functions
trimmomatic.run_ = function (myJarPath, myfilePath, args) {
    //merge other flags from commandline into a single string
    for (var i = 4; i < args.length; i++) {
        argsArr.push(args[i]);
    }
    //stringify
    var stringify = argsArr.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var trimmomaticCommand = 'java -jar ' + myJarPath + ' SE ' + myfilePath + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(trimmomaticCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export trimmomatic obj
module.exports = trimmomatic;
