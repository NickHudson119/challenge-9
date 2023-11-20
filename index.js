// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title to your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose and functionality of your project?",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you'd like to use.",
    },
    {
        type: "input",
        name: "link",
        message: "What is the URL to your deployed application",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which of these licenses are applicable to your project",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    },
    {
        type: "input",
        name: "features",
        message: "What are some cool features?",
    },
    {
        type: "input",
        name: "usage",
        message: "what languages and/or technologies are used in your project?",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is a valid email address for you?",
    },
    {
        type: "input",
        name: "copntributors",
        message: "Did anyone help contribute to your project? (list their GitHub usernames)",
    },
    {
        type: "input",
        name: "installation",
        message: "what are the required steps in order to install your application?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Your Professional README.md File...")
        writeToFile("./assets/README.md", generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();