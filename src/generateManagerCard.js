const generateManagerCard = (manager) => {
    return `<div>
          <p>${manager.name}</p>
          <p>Manager</p>
          <p>${manager.email}</p>
          <p>${manager.officeNumber}</p>
      </div>`;
  };

  
module.exports = generateManagerCard