//import modules 
var fetch = require('./fetch_seqs');


//**GET FASTA SEQS
fetch.fasta(process.argv, fetch.renameFile);

//**GET SEQS INFO IN JSON
//fetch.genbank_json(process.argv);
