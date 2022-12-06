const generateManagerCard = require("./generateCard");
const generateEngineerCard = require("./generateCard");
const generateInternCard = require("./generateCard");

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
    </body>
    </html>`;
};

module.exports = generateHTML;
