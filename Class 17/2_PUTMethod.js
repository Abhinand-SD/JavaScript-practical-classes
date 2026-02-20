fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("Updated (PUT):", data));