const postScore = (name, score) => {
  const data = {
    user: name,
    score,
  };
  const notification = document.getElementById('notification');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HctJ5M0vCPbgEUfSM01O/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.result) {
        notification.innerText = result.result;
        notification.className = 'success';
      } else {
        notification.innerText = result.message;
        notification.className = 'error';
      }
    })
    .catch((error) => {
      notification.innerText = error.message;
      notification.className = 'error';
    });
};

export default postScore;