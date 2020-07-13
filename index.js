const inquirer = require("inquirer");

const fs = require("fs");

function readme(answers) {
  return `
# ${answers.title}
#### ${answers.description}

![github badge](https://img.shields.io/badge/${answers.badge}-${answers.message}-${answers.color})

#### ${answers.content}
#### ${answers.packages}
#### ${answers.licensing}
#### ${answers.contributing}
#### ${answers.tests}
    
    `;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "What is the Table of Contents of your project?",
      name: "content",
    },
    {
      type: "input",
      message: "What packages are you using for your project?",
      name: "packages",
    },
    {
      type: "input",
      message: "what are the licensing requirements for this project?",
      name: "license",
    },
    {
      type: "input",
      message: "Who is contributing to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What tests are you using for this project?",
      name: "tests",
    },

    {
      type: "input",
      message: "What is the title of your badge?",
      name: "badge",
    },
    {
      type: "input",
      message: "What is the message of your badge?",
      name: "message",
    },
    {
      type: "input",
      message: "What is the color of your badge?",
      name: "color",
    },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile("readme/readme.md", readme(answers), function (err) {
      if (err) throw err;
      console.log("file saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
