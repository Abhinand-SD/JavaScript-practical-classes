const myPromise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() => {
        if (success) {
            resolve("Data loaded successfully ✅");
        } else {
            reject("Something went wrong ❌");
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });