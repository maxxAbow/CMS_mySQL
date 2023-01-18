const inquirer = require('inquirer');

// inquirer
//     .prompt([
//         'What would you like to do?'
//     ])
//     .then ((answer) => {
//         'Add'
//         ,'View'
//         ,'Update'
//     })
//     .catch((error){
//         if (error.isTtyError){

//         } else {
//             console.log(err)
//         }
//     });

//const TreePrompt=require('inquirer-file-tree-selection-prompt');
//inquirer.registerPrompt('tree', TreePrompt);

inquirer
    .prompt([
    {
        type:'list'
        ,name:'action'
        ,message:'What would you like to do?'
        ,choices: [
            {
            value:"Add"
            ,open: true
            // ,children:[
            //     {
            //         value:"Add a Department..."
            //     },
            //     {
            //         value:"Add a Role..."
            //     },
            //     {
            //         value:"Add an Employee..."
            //     }]
            },
            {value:"View"
            ,open: true
            // ,children:[
            //     {
            //         value:"View all Departments..."
            //     },
            //     {
            //         value:"View all Roles..."
            //     },
            //     {
            //         value:"View all Employees..."
            //     }]
            },
            {
            value:"Update"
            ,open: true
            // ,children:[
            //     {
            //         value:"Update an Employee Role..."
            //     }]
            }
        ]
    }
])
.then(answers =>{
    console.log(JSON.stringify(answers))
    }
);



//     const prompts = new Rx.Subject();
// inquirer.prompt(prompts);

// // At some point in the future, push new questions
// prompts.next({
//   /* question... */
// });
// prompts.next({
//   /* question... */
// });

// // When you're done
// prompts.complete();
// inquirer.prompt(prompts).ui.process.subscribe(onEachAnswer, onError, onComplete);