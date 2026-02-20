fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is content",
    userId: 24
  })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data))
  .catch(err => console.log(err));