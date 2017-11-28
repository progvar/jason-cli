'use strict';

const fs = require('fs');
const cli = require('commander');

cli
    .version('1.0.0')
    .command('copy-schema <source> <target>')
    .description('-  Apply the schema of the source JSON to the target JSON. Please use relative filepaths!')
    .action(copySchema);

cli.parse(process.argv);

function copySchema(source, target) {
    console.log(source, target);
}

