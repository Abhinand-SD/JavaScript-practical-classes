function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function showData() {
  let result = await getData();
  console.log(result);
}

showData();