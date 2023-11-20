// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Feutures
${data.features}
## Language & Dependencies
${data.require}
## How to Use This Application
${data.usage}
## Contributors
${data.contributors}
## Questions
Please email me [here](mailto:${data.email}?subject=[Github]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}) if you have any questions.
`;
}

module.exports = generateMarkdown;