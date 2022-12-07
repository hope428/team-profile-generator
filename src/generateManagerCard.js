const generateManagerCard = (manager) => {
    return `<div class="card m-3 w-25">
          <p>${manager.getName()}</p>
          <p>${manager.getRole()}</p>
          <p>${manager.getEmail()}</p>
          <p>${manager.getOfficeNumber()}</p>
      </div>`;
  };

  
module.exports = generateManagerCard