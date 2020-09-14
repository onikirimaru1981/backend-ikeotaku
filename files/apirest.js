fetch('https://kitsu.io/api/oauth', {
    method: 'POST',
    body: JSON.stringify({
        name: "Taylor",
        surname: "Swift"
    }),
    headers: {
        "Content-type": "application/json"
    })
    .then(response => response.json())
    .then(json => console.log(json))




