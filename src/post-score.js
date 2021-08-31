const postScore = (name, score) => {
  const data = {
    user: name,
    score,
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gUVHf8jHXiHOwKDV1m7W/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default postScore;