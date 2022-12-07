const generateInternCard = (intern) => {
    return `<div class="card p-0 m-3 w-25">
        <div class="card-header">
          <p>${intern.getName()}</p>
          <p>${intern.getRole()} <i class="fa-solid fa-graduation-cap"></i></p>
        </div>
        <ul class="border m-3 list-group list-group-flush">
          <li class="list-group-item">Id: ${intern.getId()}</li>
          <li class="list-group-item">Email: ${intern.getEmail()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>`;
  };

  module.exports = generateInternCard