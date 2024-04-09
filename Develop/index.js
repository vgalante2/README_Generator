// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [

{
    name: 'title',
    message: 'Please type your project name: '
},
{
    type: 'list',
    name: 'license',
    message: 'Please enter your project license: ',
    choices: ['No License','MIT','PostgreSQL', {
        name: 'Mozilla Public License 2.0',
        value: 'MPL-2.0' 
    },
    {
        name: 'Eclipse Public License 1.0',
        value: 'EPL-1.0' 
    } ],
 
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if(err) {
        return console.error(err)
    }
    console.log("Readme generated successfully")
})


}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
  .then((answerObj) => {
    const markdown = generateMarkdown(answerObj)
    writeToFile('README.md', markdown)
  })
  .catch((err) => {
    console.log(err)
  })

   

   
}





// Function call to initialize app
init();


// You can create an object about the function then pass that const in the function, or you can add the object in the function call