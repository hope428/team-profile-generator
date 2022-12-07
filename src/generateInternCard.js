const generateInternCard = (intern) => {
    return `<div>
          <p>${intern.name}</p>
          <p>Intern</p>
          <p>${intern.id}</p>
          <p>${intern.email}</p>
          <p>${intern.school}</p>
      </div>`;
  };

  module.exports = generateInternCard