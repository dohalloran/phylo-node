//require the following modules
var exec = require('child_process').exec;
var fs = require('fs');
var download = require('download');
//globals
var otherflags = [];
//check the user's OS 
var isWin = /^win/.test(process.platform);
var isMac = /darwin/.test(process.platform);
var isLinux = /linux/.test(process.platform);
//build a commandline for unzipping the MacOS clustal download
var unzipCommand_clustalMAC = 'tar -zxvf clustal-omega-1.2.2.tar.gz';
//obj function container
var clustal_Omega = {};

///////////////////
//CLUSTAL OMEGA FUNCTIONS
clustal_Omega.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var alignCommand = './clustalo -i ' + myfilePath + ' -o ' + outFile + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(alignCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

///////////////////////////
//Downloaded software methods follow

//function for Windows download that takes callback
function clustalPC() {
    download('http://www.clustal.org/omega/clustal-omega-1.2.2-win64.zip', './').then(() => {
        console.log('\n' + ' downloaded zipped executable');
    });
}

//function for MacOS download that takes 
//two functions to unzip and rename
function clustalMac(Mac) {
    download('http://www.clustal.org/omega/clustal-omega-1.2.2.tar.gz', './').then(() => {
        console.log('\n' + ' downloaded zipped executable');
        Mac();
    });
}

//function for linux 64bit download 
function clustalLinux() {
    download('http://www.clustal.org/omega/clustalo-1.2.2-Ubuntu-x86_64', './').then(() => {
        console.log('\n' + ' downloaded executable');
    });
}

clustal_Omega.getclustal = function () {
    if (isWin == true) {
        clustalPC();
    } else if (isMac == true) {
        clustalMac(function () {
            exec(unzipCommand_clustalMAC, function (error, stdout, stderr) {
                if (error != null) {
                    console.log(stderr);
                }
            });
            console.log('\n' + ' unzipped file...TODO configure and add it to your PATH');

        });
    } else {
        clustalLinux();
    }
}

//export clustal_Omega obj
module.exports = clustal_Omega;
