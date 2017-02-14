//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var bowtie2 = require('./bowtie2.js');
//get Path for output
var outFile = './Output/elegans_reads_aligned.sam';
//run bowtie2 program
base.call_(process.argv[2], outFile, process.argv, bowtie2.run_);
