const generateEngineerCard = (engineer) => {
  return `<div class="card m-3 w-25">
          <p>${engineer.getName()}</p>
          <p>${engineer.getRole()}</p>
          <p>${engineer.getId()}</p>
          <p>${engineer.getEmail()}</p>
          <p>${engineer.getGithub()}</p>
      </div>`;
};

module.exports = generateEngineerCard;
