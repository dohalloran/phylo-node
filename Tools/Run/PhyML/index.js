//import functions 
var base = require('../../../Wrapper_Core/base-wrap');
var phyml = require('./phyml.js');
//get PhyML
//phyml.getphyml();
var outFile = './Output/PhyML.txt';
//run phyml program
base.call_(process.argv[2], outFile, process.argv, phyml.run_);