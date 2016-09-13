//require the following modules
var exec = require('child_process').exec;
var fs = require('fs');
var download = require('download');
//newArr will hold genes accession numbers for fastA seq
var inPut = [];
//obj function container
var fetch_seqs = {};

////////////////
//fastA Functions
fetch_seqs.fasta = function (genes, callback) {
    //error check that at least 1 accession number is supplied
    if (genes.length >= 3) {
        //take a slice of process.argv to get accession numbers
        for (var i = 2; i < genes.length; i++) {
            inPut.push(genes[i]);
        }
        //stringify array
        var sequences = inPut.toString();

        //use NCBI e-utilities API to get sequences 
        download('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=' + sequences + '&rettype=fasta&retmode=text',
            './').then(() => {
            console.log('\n' + ' downloaded sequences');
            callback(sequences, inPut[0]);
        });
    } else {
        console.log("insufficient number of arguments");
    }
}

//renames file to something manageable 
//and adds fastA extension for easy piping
fetch_seqs.renameFile = function (sequences, name) {
    fs.renameSync('efetch.fcgi!db=nuccore&id=' + sequences + '&rettype=fasta&retmode=text', name + '.fasta');
    console.log('\n' + ' truncated filename to ' + name + '.fasta' + '\n');
}

////////////////
//SEQS in JSON Functions
fetch_seqs.genbank_json = function (genes) {
    //error check that at least 1 accession number is supplied
    if (genes.length >= 3) {
        //take a slice of process.argv to get accession numbers
        for (var i = 2; i < genes.length; i++) {
            inPut.push(genes[i]);
        }
        //stringify array
        var sequences = inPut.toString();

        //use NCBI e-utilities API to get sequences 
        download('http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=' + sequences + '&retmode=json',
            './').then(() => {
            console.log('\n' + ' downloaded sequences');
        });
    } else {
        console.log("insufficient number of arguments");
    }
}



//export fetch_seqs obj
module.exports = fetch_seqs;