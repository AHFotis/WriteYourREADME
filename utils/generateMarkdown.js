// TODO: Create a function that returns a license badge based on which license is passed in

// const { BADHINTS } = require("dns");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
  } else {
    return "";
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`
  } else {
    return "";
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This application is protected under the ${license} license.`
  } else {
    return "No license provided";
  } 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub License](${renderLicenseBadge(data.license)})
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Test](#test)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Installation
  To install all necessary materials for this project, run the following command:
  ${data.installation}
  ## Test
  To test this project, run the following command:
  ${data.test}
  ## Usage
  ${data.usage}
  ## License
  * ${renderLicenseSection(data.license)}
  * For more information, visit this link: 
  [${data.license} Info](${renderLicenseLink(data.license)})
  ## Contributing
  ${data.contribution}
  ## Questions
  If you have any questions, please reach out.
  * GitHub: ${data.gitName}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
