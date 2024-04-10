// TODO: Include packages needed for this application
const generateMarkdown = require('./Develop/utils/generateMarkdown')
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
    choices: [
      { name: 'MIT', value: 'MIT' },
      { name: 'PostgreSQL', value: 'PostgreSQL' },
      { name: 'Academic Free License 3.0', value: 'AFL-3.0' },
      { name: 'Eclipse Public License 2.0', value: 'EPL-2.0' },
      { name: 'No License', value: '' } 
  ]
 
},
{
  name: 'description',
  type: 'input',
  message: 'Please enter a description: '
},
{
  name: 'imageURL',
  type: 'input',
  message: 'Please enter the URL to an image for your project (leave blank if none): '
},
{
  name: 'liveDemo',
  type: 'input',
  message: 'Please enter the URL to a live demo of your project (leave blank if none): '
},
{
  name: 'usage',
  type: 'input',
  message: 'Please enter how someone can use your app: '
},
{
  name: 'github',
  type: 'input',
  message: 'Please enter your github username: '
},
{
  name: 'email',
  type: 'input',
  message: 'Please enter your email: '
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