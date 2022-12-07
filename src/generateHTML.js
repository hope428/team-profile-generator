const generateManagerCard = require("./generateManagerCard");
const generateEngineerCard = require("./generateEngineerCard");
const generateInternCard = require("./generateInternCard");

const generateEngineerCards = (engineers) => {
  const engineerCards = [];
  for (const engineer of engineers) {
    engineerCards.push(generateEngineerCard(engineer));
  }
  return engineerCards
};

const generateInternCards = (interns) => {
  const internCards = [];
  for (const intern of interns) {
    internCards.push(generateInternCard(intern));
  }
  return internCards
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
        ${generateEngineerCards(engineers)}
        ${generateInternCards(interns)}
    </body>
    </html>`;
};

module.exports = generateHTML;
