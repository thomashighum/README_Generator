// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "confirm",
    message: "If you are going to include any links or media please have them ready",
    name:"start_confirm"

  },
  {
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Project Description:",
    name: "description",
  },
  {
    type: "confirm",
    message: "Would you like to attach a picture or gif of the installation project?",
    name: "description_confirm",
  },
  {
    type: "input",
    message: "Add link here:",
    name: "description_media",
    when: (answers) => answers.description_confirm === true
  },
  {
    type: "input",
    message: "Describe the media:",
    name: "description_media_description",
    when: (answers) => answers.description_confirm === true
  },
  {
    type: "input",
    message: "How do you install the project?",
    name: "install",
  },
  {
    type: "confirm",
    message: "Would you like to attach a picture or gif of the installation process?",
    name: "install_confirm",
  },
  {
    type: "input",
    message: "Add link here:",
    name: "install_media",
    when: (answers) => answers.install_confirm === true
  },
  {
    type: "input",
    message: "Describe the media:",
    name: "install_media_description",
    when: (answers) => answers.install_confirm === true
  },
  {
    type: "input",
    message: "How do you use the project?",
    name: "usage",
  },
  {
    type: "confirm",
    message: "Would you like to attach a picture or gif of the usage process?",
    name: "usage_confirm",
  },
  {
    type: "input",
    message: "Add link here:",
    name: "usage_media",
    when: (answers) => answers.usage_confirm === true
  },
  {
    type: "input",
    message: "Describe the media",
    name: "usage_media_description",
    when: (answers) => answers.usage_confirm === true
  },
  {
    type: "list",
    message: "What license or badge does the project have?",
    name: "license",
    choices: [
      "Academic_Free_v3.0",
      "Apache_v2.0",
      "Artistic_v2.0",
      "BSD_Zero_Clause",
      "BSD_2_Clause",
      "BSD_3_Clause_Clear",
      "BSD_3_Clause",
      "BSD_4_Clause",
      "Boost_Software_v1.0",
      "CeCILL_Free_Software_v2.1",
      "Educational_Community_v2.0",
      "Eclipse_Public_v2.0",
      "European_Union_v1.2",
      "GNU_AGPL_v3.0",
      "GNU_GPL_v3.0",
      "GNU_LGPL_v3.0",
      "MIT",
      "Mozilla_Public_v2.0",
      "Microsoft_Public",
      "Open_Software_v3.0",
      "PostgreSQL",
      "The_Unlicense",
      "Universal",
      "Vim",
      "zlib",
    ],
  },
  {
    type: "input",
    message: "How should others contribute to the project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: function (email) {
  
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
              if (valid) {
                console.log("Great job");
                  return true;
              } else {
                  console.log(".  Please enter a valid email")
                  return false;
              }
          }
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("Example_README.md", writeToFile(response), (err) =>
    err ? console.error(err) : console.log("README.md Generated Successfully!" + response)
  );
});

// TODO: Create a function to write README file
function writeToFile(response) {
    return ` # ${response.title}
  
![${response.license}](https://img.shields.io/badge/license-${response.license}-blue)
  
## Description
${response.description}

${response.description_confirm ? ![response.description_confirm_description](response.description_media) : ''}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
  
## Installation
${response.install}

${response.install_confirm ? ![response.install_confirm_description](response.install_media) : ''}

## Usage
${response.usage}

${response.usage_confirm ? ![response.usage_confirm_description](response.usage_media) : ''}

## License
  
This application is covered under the ${response.license} license.

## Contributing
${response.contribute}
## Testing
${response.test}
## Questions
If you have any questions, please feel free to contact me via:
- Github: [${response.github}](https://github.com/${response.github})
- Email: [${response.email}](mailto:${response.email})
`;
}
