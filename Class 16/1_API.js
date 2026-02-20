fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log("Users:", data);
    })
    .catch(err => {
        console.log("Error:", err);
    });
    