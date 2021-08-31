const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gUVHf8jHXiHOwKDV1m7W/scores/')
  .then((response) => response.json())
  .then((data) => data.result);

export default getScores;