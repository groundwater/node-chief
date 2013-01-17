#!/usr/bin/env node

var commander = require('commander');
var colors    = require('colors');

var general   = require('./index');

commander
.option('-P, --procfile <FILE>', 'Load Processes from FILE', 'Procfile')
.option('-E, --environ  <PATH>', 'Read In Environment from PATH (use - for STDIN)', '-')
.option('-L, --logdir   <BASE>', 'Use BASE directory for logging application','.')

commander
.command('start')
.description('Run a Procfile')
.action(function(command){
    general.attack(commander);
})

commander.parse(process.argv);

if(commander.args.length==0) {
    console.log("    __   ___       ___  __               ".grey)
    console.log("   / _` |__  |\\ | |__  |__)  /\\  |      ".grey)
    console.log("   \\__> |___ | \\| |___ |  \\ /--\\ |___ ".grey)
    commander.help();
}
