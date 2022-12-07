const generateManagerCard = (manager) => {
    return `<div class="card m-3 w-25">
          <p>${manager.getName()}</p>
          <p>Manager</p>
          <p>${manager.email}</p>
          <p>${manager.officeNumber}</p>
      </div>`;
  };

  
module.exports = generateManagerCard