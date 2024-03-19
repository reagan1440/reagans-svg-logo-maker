const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/square.js');
const { Circle } = require('./lib/circle.js');
const { Triangle } = require('./lib/traingle.js');

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
    .then((response) => {
        if (response.shape === 'Square') {
            const square = new Square(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', square.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        } else if (response.shape === 'Circle') {
            const circle = new Circle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        } else {
            const triangle = new Triangle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./examples/logo.svg', triangle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        }
    })
    .then(() => {
        return console.log("logo.svg sucessfully generated")
    })