const generateManagerCard = require("./generateManagerCard");
const generateEngineerCard = require("./generateEngineerCard");
const generateInternCard = require("./generateInternCard");

const generateEngineerCards = (engineers) => {
  const engineerCards = [];
  for (const engineer of engineers) {
    engineerCards.push(generateEngineerCard(engineer));
  }
  return engineerCards.join('');
};

const generateInternCards = (interns) => {
  const internCards = [];
  for (const intern of interns) {
    internCards.push(generateInternCard(intern));
  }
  return internCards.join('');
};

const generateHTML = (manager, engineers, interns) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/982a1daf20.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>My Team</header>
        <main class="container">
            <div class="row justify-content-center">
            ${generateManagerCard(manager)}
            ${generateEngineerCards(engineers)}
            ${generateInternCards(interns)}
            </div>
        </main>
    </body>
    </html>`;
};

module.exports = generateHTML;
