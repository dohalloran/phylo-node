//require the following modules
var exec = require('child_process').exec;
var fs = require('fs');
var download = require('download');
//other flags will be pushed into otherlfags arr for muscle
var otherflags = [];
//check the user's OS 
var isWin = /^win/.test(process.platform);
var isMac = /darwin/.test(process.platform);
var isLinux = /linux/.test(process.platform);
//build a commandline for unzipping the MacOS muscle download
var unzipCommand_muscle = 'tar -zxvf muscle3.8.31_i86darwin64.tar.gz';
//obj function container
var muscle = {};

///////////////////
//MUSCLE FUNCTIONS
muscle.run_ = function (myfilePath, outFile, flagArr) {
    //merge other flags from commandline into a single string
    for (var i = 3; i < flagArr.length; i++) {
        otherflags.push(flagArr[i]);
    }
    //stringify
    var stringify = otherflags.toString();
    //replace commas with spaces
    var flags = stringify.replace(/,/g, " ");
    //generate the commandline 
    var alignCommand = 'muscle -in ' + myfilePath + ' -out ' + outFile + ' ' + flags;
    console.log('\n' + ' running...');
    //spawn child to run exec shell
    var child = exec(alignCommand, function (error, stdout, stderr) {
        if (error != null) {
            console.log(stderr);
        }
        console.log('\n' + ' finished!');
    });
}

//methods for downloading software follows

//function for Windows download that takes callback
function musclePC(Windows) {
    download('http://www.drive5.com/muscle/downloads3.8.31/muscle3.8.31_i86win32.exe', './').then(() => {
        console.log('\n' + ' downloaded executable');
        Windows();
    });
}

//function for MacOS download that takes 
//two functions to unzip and rename
function muscleMac(Mac, callback) {
    download('http://www.drive5.com/muscle/downloads3.8.31/muscle3.8.31_i86darwin64.tar.gz', './').then(() => {
        console.log('\n' + ' downloaded zipped executable');
        Mac(callback);
    });
}

//function for linux 64 bit download that takes 
//two functions to unzip and rename
function muscleLinux(lx, callback) {
    download('http://www.drive5.com/muscle/downloads3.8.31/muscle3.8.31_i86linux64.tar.gz', './').then(() => {
        console.log('\n' + ' downloaded zipped executable');
        lx(callback);
    });
}

muscle.getmuscle = function () {
    if (isWin == true) {
        musclePC(function () {
            fs.rename('muscle3.8.31_i86win32.exe', 'muscle.exe', function (err) {
                if (err) throw err;
                fs.stat('muscle.exe', function (err, stats) {
                    if (err) throw err;
                    console.log('\n' + ' truncated executable filename to muscle');
                });
            });
        });
    } else if (isMac == true) {
        muscleMac(function (callback) {
            exec(unzipCommand_muscle, function (error, stdout, stderr) {
                if (error != null) {
                    console.log(stderr);
                }
                callback();
            });
            console.log('\n' + ' unzipped file...TODO add it to your PATH');

        }, function () {
            fs.renameSync('muscle3.8.31_i86darwin64', 'muscle');
            console.log('\n' + ' truncated executable filename to muscle' + '\n');
        });
    } else {
        muscleLinux(function (callback) {
            exec(unzipCommand_muscle, function (error, stdout, stderr) {
                if (error != null) {
                    console.log(stderr);
                }
                callback();
            });
            console.log('\n' + ' unzipped file...TODO add it to your PATH');

        }, function () {
            fs.renameSync('muscle3.8.31_i86linux64', 'muscle');
            console.log('\n' + ' truncated executable filename to muscle' + '\n');
        });
    }
}

//export muscle obj
module.exports = muscle;