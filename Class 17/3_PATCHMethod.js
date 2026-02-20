fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Partially Updated"
  })
})
  .then(res => res.json())
  .then(data => console.log("Updated (PATCH):", data));