'use strict';

const fs = require('fs');
const cli = require('commander');
const { getFirstMissingKey, handleError } = require('./utilities');


function splitTargetList(targetList) {
    return targetList.split(',').filter(el => el);
}


cli
    .version('1.0.0')
    .command('copy-schema')
    .description('-  Apply the schema of the source JSON to the target JSON. Please use relative filepaths!')
    .option('-s, --source <source>', 'source JSON')
    .option('-t, --targets <targets>', 'a list of target JSONs', splitTargetList)
    .action(onCopySchema);

cli.parse(process.argv);


function onCopySchema(options) {
    try {
        const argsNeeded = ['source', 'targets'];

        checkOptions(options, argsNeeded);

        const { source, targets } = options;
        // TODO
    } catch (err) {
        handleError(err);
    }
}

function checkOptions(options, argsNeeded) {
    const missingArg = getFirstMissingKey(options, argsNeeded);

    if (missingArg) {
        throw `Missing argument <${missingArg}>`;
    }
}