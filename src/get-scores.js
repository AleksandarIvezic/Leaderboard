const getScores = async() => {
  return await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gUVHf8jHXiHOwKDV1m7W/scores/')
  .then(response=> response.json())
   .then(data => data.result);
}

export { getScores }