"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Command = require('../ember-cli/lib/models/command');
const stringUtils = require('ember-cli-string-utils');
const lookupCommand = require('../ember-cli/lib/cli/lookup-command');
const commandsToIgnore = [
    'easter-egg',
    'init',
    'destroy'
];
const HelpCommand = Command.extend({
    name: 'help',
    description: 'Shows help for the CLI.',
    works: 'everywhere',
    availableOptions: [],
    anonymousOptions: ['command-name (Default: all)'],
    run: function (commandOptions, rawArgs) {
        let commandFiles = fs.readdirSync(__dirname)
            .filter(file => file.match(/\.(j|t)s$/) && !file.match(/\.d.ts$/))
            .map(file => path.parse(file).name)
            .map(file => file.toLowerCase());
        commandFiles = commandFiles.filter(file => {
            return commandsToIgnore.indexOf(file) < 0;
        });
        let commandMap = commandFiles.reduce((acc, curr) => {
            let classifiedName = stringUtils.classify(curr);
            let defaultImport = require(`./${curr}`).default;
            acc[classifiedName] = defaultImport;
            return acc;
        }, {});
        if (rawArgs.indexOf('all') !== -1) {
            rawArgs = []; // just act as if command not specified
        }
        commandFiles.forEach(cmd => {
            let Command = lookupCommand(commandMap, cmd);
            let command = new Command({
                ui: this.ui,
                project: this.project,
                commands: this.commands,
                tasks: this.tasks
            });
            if (rawArgs.length > 0) {
                let commandInput = rawArgs[0];
                const aliases = Command.prototype.aliases;
                if (aliases && aliases.indexOf(commandInput) > -1) {
                    commandInput = Command.prototype.name;
                }
                if (cmd === commandInput) {
                    if (command.printDetailedHelp(commandOptions)) {
                        this.ui.writeLine(command.printDetailedHelp(commandOptions));
                    }
                    else {
                        this.ui.writeLine(command.printBasicHelp(commandOptions));
                    }
                }
            }
            else {
                this.ui.writeLine(command.printBasicHelp(commandOptions));
            }
        });
    }
});
HelpCommand.overrideCore = true;
exports.default = HelpCommand;
//# sourceMappingURL=/users/hans/sources/angular-cli/commands/help.js.map