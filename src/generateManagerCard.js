const generateManagerCard = (manager) => {
  return `<div class="card m-3 p-0 w-25">
    <div class="card-header">
          <p>${manager.getName()}</p>
          <p>${manager.getRole()} <i class="fa-solid fa-mug-saucer"></i></p>
        </div>
        <ul class="m-3 list-group list-group-flush">
          <li class="list-group-item">Id: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${
            manager.email
          }">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>`;
};

module.exports = generateManagerCard;
