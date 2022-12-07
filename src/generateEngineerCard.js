const generateEngineerCard = (engineer) => {
  return `<div class="card p-0 m-3 w-25">
    <div class="card-header">
          <p>${engineer.getName()}</p>
          <p>${engineer.getRole()} <i class="fa-solid fa-gears"></i></p>
    </div>
    <ul class="m-3 list-group list-group-flush">
          <li class="list-group-item">Id: ${engineer.getId()}</li>
          <li class="list-group-item">Email: ${engineer.getEmail()}</li>
          <li class="list-group-item">Github: ${engineer.getGithub()}</li>
    </ul>
      </div>`;
};

module.exports = generateEngineerCard;
