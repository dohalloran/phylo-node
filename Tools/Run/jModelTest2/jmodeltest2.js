//module for spawning shell
var exec = require('child_process').exec;
//array to hold necessary arguments from process.argv
var argsArr = [];
//jmodeltest2 object container
var jmodeltest2 = {};

jmodeltest2.run_ = function (myJarPath, myfilePath, args) {
    //commandline variable
    var jmodeltest2Command;
    //merge other flags from commandline into a single string
    for (var i = 4; i < args.length; i++) {
        argsArr.push(args[i]);
    }
    //stringify
    var stringify = argsArr.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline to execute
    jmodeltest2Command = 'java -jar ' + myJarPath + ' -d ' + myfilePath + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(jmodeltest2Command, function (error, stdout, stderr) {
        if (error == null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//export jmodeltest2 obj
module.exports = jmodeltest2;