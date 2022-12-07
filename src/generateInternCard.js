const generateInternCard = (intern) => {
    return `<div class="card m-3 w-25">
          <p>${intern.name}</p>
          <p>Intern</p>
          <p>${intern.id}</p>
          <p>${intern.email}</p>
          <p>${intern.school}</p>
      </div>`;
  };

  module.exports = generateInternCard