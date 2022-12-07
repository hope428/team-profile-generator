const generateEngineerCard = (engineer) => {
  return `<div class="card m-3 w-25">
          <p>${engineer.name}</p>
          <p>Engineer</p>
          <p>${engineer.id}</p>
          <p>${engineer.email}</p>
          <p>${engineer.github}</p>
      </div>`;
};

module.exports = generateEngineerCard;
