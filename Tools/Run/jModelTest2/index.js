//import modules 
var base = require('../../../Wrapper_Core/base-wrap');
var jmodeltest2 = require('./jmodeltest2');

//**Run jModelTest2
//process.argv[2] = path to jar executable file
//process.argv[3] = path to input file
base.call_(process.argv[2], process.argv[3], process.argv, jmodeltest2.run_);