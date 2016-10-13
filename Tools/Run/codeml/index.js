//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var codeml = require('./codeml.js');

var outFile = './Output/result.codeml'; // actually specified in the cnt file
//run codeml program
base.call_(process.argv[2], outFile, process.argv, codeml.run_);