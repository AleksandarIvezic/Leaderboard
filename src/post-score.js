const postScore = (name, score) => {
  const data = {
    "name": name,
    "score": score
}
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gUVHf8jHXiHOwKDV1m7W/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export { postScore }