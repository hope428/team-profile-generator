const generateEngineerCard = (engineer) => {
  return `<div class="card p-0 m-3 w-25">
    <div class="card-header">
          <p>${engineer.getName()}</p>
          <p>${engineer.getRole()} <i class="fa-solid fa-gears"></i></p>
    </div>
    <ul class="m-3 list-group list-group-flush">
          <li class="list-group-item">Id: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${
            engineer.email
          }">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${
            engineer.github
          }">${engineer.getGithub()}</a></li>
    </ul>
      </div>`;
};

module.exports = generateEngineerCard;
