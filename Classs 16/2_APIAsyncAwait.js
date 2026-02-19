const fetchUserData = async() => {
   
    const respose = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respose.json();
    console.log(data);
}

fetchUserData();