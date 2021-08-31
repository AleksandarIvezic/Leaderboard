import './style.css';
import { postScore } from './post-score';

const sendScore = document.getElementById('sendScore');

sendScore.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  postScore(name.value, score.value);
})