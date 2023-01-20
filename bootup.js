const inquirer = require('inquirer');
const TreePrompt = require('inquirer-tree-prompt');
const fs = require('fs');

inquirer.registerPrompt('tree', TreePrompt);

inquirer
    .prompt([
    {
        type:'tree'
        ,name:'action'
        ,message:'What would you like to do?'
        ,tree: [
            {
            value:"Add"
            ,open: true
            ,children:[
                {
                    value:"Add a Department..."
                },
                {
                    value:"Add a Role..."
                },
                {
                    value:"Add an Employee..."
                }]
            },
            {value:"View"
            ,open: true
            ,children:[
                {
                    value:"View all Departments..."
                },
                {
                    value:"View all Roles..."
                },
                {
                    value:"View all Employees..."
                }]
            },
            {
            value:"Update"
            ,open: true
            ,children:[
                {
                    value:"Update an Employee Role..."
                }]
            }
        ]
    }
])
.then(answers =>{
    console.log(JSON.stringify(answers))
    }
);


//direct to next step: add, update, or view
if (prompt.answers.includes('/Add/*')) () => {
    var addInfo = require('./add.js');
}
else if (prompt.answers.includes('/Update/*')) () => {
    var updateInfo = require('./update.js');
}
else if (prompt.answers.includes('/View/*')) () => {
    var viewInfo = require('./view.js');
}
else (
    console.log('Please provide valid input...')
);