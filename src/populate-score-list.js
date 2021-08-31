const populateScoreList = (scores) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  scores.forEach((score) => {
    const field = document.createElement('li');
    field.innerHTML = `<span>${score.user}</span> <span>${score.score}</span>`;
    list.appendChild(field);
  });
};

export default populateScoreList;