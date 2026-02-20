fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"})
  .then(res => {
   
    if (res.ok) {
      console.log("Deleted successfully");
    }
  });