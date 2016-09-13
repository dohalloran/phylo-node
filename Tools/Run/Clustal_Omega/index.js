//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
//****CLUSTAL OMEGA
var clustal_Omega = require('./clustal_Omega.js');
//get Clustal Omega executable
//clustal_Omega.getclustal();
//get Path for output
var outFile = './Output/Clustal_Result.aln';
//run Clustal program
base.call_(process.argv[2], outFile, process.argv, clustal_Omega.run_);