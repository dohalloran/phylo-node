//module for spawning shell
var exec = require('child_process').exec;
//array to hold necessary arguments from process.argv
var argsArr = [];
//prottest object container
var prottest = {};

prottest.run_ = function (myJarPath, myfilePath, args) {
    //commandline variable
    var prottestCommand;
    //merge other flags from commandline into a single string
    for (var i = 4; i < args.length; i++) {
        argsArr.push(args[i]);
    }
    //stringify
    var stringify = argsArr.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline to execute
    prottestCommand = 'java -jar ' + myJarPath + ' -i ' + myfilePath + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(prottestCommand, function (error, stdout, stderr) {
        if (error == null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export prottest obj
module.exports = prottest;