var shell = require('./phylo-node_pipes');

// execute multiple commands in series
shell.chain([
    //enter all the commands in series in this array 
    //separated by a comma and inside quotes
    'node ../Sequences/app.js NM_001028053.2 AF032112.1 NM_001129696.2',
    'node app_2.js NM_001028053.2.fasta'
], function (err) {
    console.log('\n' + 'multiple commands successfully piped' + '\n');
});
