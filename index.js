// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        mesage: "What is the title to your project?",
    },
    {
        type: "input",
        name: "description",
        mesage: "What is the purpose and functionality of your project?",
    },
    {
        type: "input",
        name: "screenshot",
        mesage: "Please provide the relative path to the image you'd like to use.",
    },
    {
        type: "input",
        name: "link",
        mesage: "What is the URL to your deployed application",
    },
    {
        type: "checkbox",
        name: "license",
        mesage: "Which of these licenses are applicable to your project",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    },
    {
        type: "input",
        name: "features",
        mesage: "What are some cool features?",
    },
    {
        type: "input",
        name: "usage",
        mesage: "what languages and/or technologies are used in your project?",
    },
    {
        type: "input",
        name: "creator",
        mesage: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        mesage: "What is a valid email address for you?",
    },
    {
        type: "input",
        name: "copntributors",
        mesage: "Did anyone help contribute to your project? (list their GitHub usernames)",
    },
    {
        type: "input",
        name: "installation",
        mesage: "what are the required steps in order to install your application?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();