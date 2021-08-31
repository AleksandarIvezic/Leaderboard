import './style.css';
import { postScore } from './post-score';
import { getScores } from './get-scores';

const sendScore = document.getElementById('sendScore');
const refresh = document.getElementById('refresh');
let scores;

sendScore.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  postScore(name.value, score.value);
});

refresh.addEventListener('click', () => {
  scores = getScores();
})