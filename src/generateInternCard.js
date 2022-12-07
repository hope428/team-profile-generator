const generateInternCard = (intern) => {
    return `<div class="card m-3 w-25">
          <p>${intern.getName()}</p>
          <p>${inter.getRole()}</p>
          <p>${intern.getId()}</p>
          <p>${intern.getEmail()}</p>
          <p>${intern.getSchool()}</p>
      </div>`;
  };

  module.exports = generateInternCard