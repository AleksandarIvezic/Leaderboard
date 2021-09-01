const populateScoreList = (scores) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  scores = scores.sort((a, b) => b.score - a.score);
  scores.forEach((score) => {
    const field = document.createElement('li');
    const formatedNumber = new Intl.NumberFormat('de-DE').format(score.score);
    field.innerHTML = `<span>${score.user}</span> <span>${formatedNumber}</span>`;
    list.appendChild(field);
  });
};

export default populateScoreList;