import './style.css';
import { postScore } from './post-score';
import { getScores } from './get-scores';
import { populateScoreList } from './populate-score-list';

const sendScore = document.getElementById('sendScore');
const refresh = document.getElementById('refresh');

sendScore.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  postScore(name.value, score.value);
  name.value = '';
  score.value = '';
});

refresh.addEventListener('click',  async() => {
  populateScoreList(await getScores());
});