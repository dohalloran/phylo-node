//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
//****Kalign --> http://msa.sbc.su.se/downloads/kalign-1.04.tgz
var kalign = require('./kalign.js');
//get Path for output
var outFile = './Output/kalign_Result.aln';
//run Clustal program
base.call_(process.argv[2], outFile, process.argv, kalign.run_);