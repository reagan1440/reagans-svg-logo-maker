const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/square.js');
const { Circle } = require('./lib/circle.js');
const { Triangle } = require('./lib/triangle.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'input three characters for the logo.',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'input character color text.',
            name: 'textColor',
        },
        {
            type: 'rawlist',
            message: 'use arrow keys to select a shape for your logo.',
            choices: [
                { name: 'Square', value: 'Square' },
                { name: 'Circle', value: 'Circle' },
                { name: 'Triangle', value: 'Triangle' },
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shapes color.',
            name: 'shapeColor',
        },
    ])