//require the following modules
var download = require('download');
//obj function container
var get_executable = {};


///////////////////////////
//Downloaded software methods follow
get_executable.software = function (URL) {
    if (!URL) {
        console.log('must enter a URL');
    } else if (isURL(URL) == false) {
        console.log('must enter a valid URL');
    } else {
        getExe(URL);
    }
}

//download 
function getExe(URL) {
    download(URL, './').then(() => {
        console.log('\n' + ' downloaded executable');
    });
}

function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}

//export get_executable obj
module.exports = get_executable;