const populateScoreList = (scores) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  scores.forEach(score => {
    let field = document.createElement('li');
    field.innerHTML = `<span>${score.name}</span><span>${score.score}</span>`;   
    list.appendChild(field); 
  });
}

export { populateScoreList }