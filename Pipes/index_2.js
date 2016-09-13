//import functions 
var base = require('../Wrapper_Core/base-wrap');
var muscle = require('../Tools/Run/MUSCLE/muscle');
//get Path for output
var outFile = './Output/Muscle_Result.aln';
//run muscle program
base.call_(process.argv[2], outFile, process.argv, muscle.run_);