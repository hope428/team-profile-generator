const generateManagerCard = require("./generateCard");
const generateEngineerCard = require("./generateCard");
const generateInternCard = require("./generateCard");

const generateEngineerCards = (engineers) => {
  for (const engineer of engineers) {
    generateEngineerCard(engineer);
  }
};

const generateInternCards = (interns) => {
  for (const intern of interns) {
    generateInternCard(intern);
  }
};

const generateHTML = (manager, engineers, interns) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${generateManagerCard(manager)}
        ${generateEngineerCards}
        ${generateInternCards}
    </body>
    </html>`;
};

module.exports = generateHTML;
