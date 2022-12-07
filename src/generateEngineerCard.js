const generateEngineerCard = (engineer) => {
  return `<div>
          <p>${engineer.name}</p>
          <p>Engineer</p>
          <p>${engineer.id}</p>
          <p>${engineer.email}</p>
          <p>${engineer.github}</p>
      </div>`;
};

module.exports = generateEngineerCard;
