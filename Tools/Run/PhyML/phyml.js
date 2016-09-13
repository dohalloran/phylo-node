//require the following modules
var exec = require('child_process').exec;
var fs = require('fs');
var download = require('download');
//other flags will be pushed into Arrflags arr for PhyML
var Arrflags = [];
//build a commandline for unzipping the PhyML download
var unzipCommand_phyml = 'unzip PhyML-3.1.zip';
//check the user's OS 
var isWin = /^win/.test(process.platform);
var isMac = /darwin/.test(process.platform);
var isLinux = /linux/.test(process.platform);
//obj function container
var phyml = {};

///////////////////
//PhyML Functions
phyml.run_ = function (myfilePath, outfile, flagArr) {
    //commandline variable
    var phymlCommand;
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        Arrflags.push(flagArr[i]);
    }
    //stringify
    var stringify = Arrflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline based on OS
    if (isMac == true) {
        phymlCommand = 'PhyML-3.1_macOS-MountainLion -i ' + myfilePath + ' ' + flags;
    } else if (isWin == true) {
        phymlCommand = 'PhyML-3.1_win32 -i ' + myfilePath + ' ' + flags;
    } else {
        phymlCommand = 'PhyML-3.1_linux64 -i' + myfilePath + ' ' + flags;
    }
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(phymlCommand, function (error, stdout, stderr) {
        if (error == null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}


//methods for downloading software follows:

function phymlPC() {
    download('http://www.atgc-montpellier.fr/download/binaries/phyml/PhyML-3.1.zip', './').then(() => {
        console.log('\n' + ' downloaded zipped executable...TODO unzip and add it to your PATH');
    });
}

function phymlLinux() {
    download('http://www.atgc-montpellier.fr/download/binaries/phyml/PhyML-3.1.zip', './').then(() => {
        console.log('\n' + ' downloaded zipped executable...TODO unzip and add it to your PATH');
    });
}

function phymlMac(Mac) {
    download('http://www.atgc-montpellier.fr/download/binaries/phyml/PhyML-3.1.zip', './').then(() => {
        console.log('\n' + ' downloaded zipped executable');
        Mac();
    });
}

phyml.getphyml = function () {
    if (isMac == true) {
        phymlMac(function () {
            exec(unzipCommand_phyml, function (error, stdout, stderr) {
                if (error != null) {
                    console.log(stderr);
                }
            });
            console.log('\n' + ' unzipped file...TODO add it to your PATH');
        });
    } else if (isWin == true) {
        phymlPC();
    } else {
        phymlLinux();
    }
}

//export phyml obj
module.exports = phyml;