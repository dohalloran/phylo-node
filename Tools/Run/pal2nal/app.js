//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var pal2nal = require('./pal2nal.js');

var outFile = './Output/result.codon';
//run pal2nal script
base.call_(process.argv[2], outFile, process.argv, pal2nal.run_);
