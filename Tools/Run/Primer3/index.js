//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var primer3 = require('./primer3.js');
//collect input file name
var outFile = './Output/primer3.txt';
//run primer3 program
base.call_(process.argv[2], outFile, process.argv, primer3.run_);