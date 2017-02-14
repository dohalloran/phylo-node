//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var Slr = require('./Slr.js');

var outFile = './Output/Slr_Results.txt';
//run Slr program
base.call_(process.argv[2], outFile, process.argv, Slr.run_);
