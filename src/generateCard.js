const generateManagerCard = (manager) => {
    return `<div>
        <p>${manager.getName()}</p>
        <p>${manager.getRole()}</p>
        <p>${manager.getId()}</p>
        <p>${manager.getEmail()}</p>
        <p>${manager.getOfficeNumber()}</p>
    </div>`
};

const generateEngineerCard = (engineer) => {
    return `<div>
        <p>${engineer.getName()}</p>
        <p>${engineer.getRole()}</p>
        <p>${engineer.getId()}</p>
        <p>${engineer.getEmail()}</p>
        <p>${engineer.getGithub()}</p>
    </div>`
};

const generateInternCard = (intern) => {
    return `<div>
        <p>${intern.getName()}</p>
        <p>${intern.getRole()}</p>
        <p>${intern.getId()}</p>
        <p>${intern.getEmail()}</p>
        <p>${intern.getSchool()}</p>
    </div>`
};

module.exports = generateManagerCard,
  generateEngineerCard,
  generateInternCard;
