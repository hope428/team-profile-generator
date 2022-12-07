const generateManagerCard = (manager) => {
  return `<div class="card m-3 p-0 w-25">
    <div class="card-header">
          <p>${manager.getName()}</p>
          <p>${manager.getRole()} <i class="fa-solid fa-mug-saucer"></i></p>
        </div>
        <ul class="border m-3 list-group list-group-flush">
          <li class="list-group-item">Id: ${manager.getId()}</li>
          <li class="list-group-item">Email: ${manager.getEmail()}</li>
          <li class="list-group-item">School: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>`;
};

module.exports = generateManagerCard;
