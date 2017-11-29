'use strict';


function getFirstMissingKey(object, keys) {
    return keys.find(key => !object[key]);
}


function handleError(err) {
    console.error(err);

    process.exit(1);
}


module.exports = {
    getFirstMissingKey,
    handleError
}