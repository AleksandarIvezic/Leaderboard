const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HctJ5M0vCPbgEUfSM01O/scores/')
  .then((response) => response.json())
  .then((data) => data.result);

export default getScores;