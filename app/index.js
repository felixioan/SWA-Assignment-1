fetch('http://localhost:8080/data')
.then((response) => {
    return response.json();
})
.then((jsonResponse) => {
    console.log(jsonResponse);
})
.catch((error) => {
    console.log("Error is: " + error);
})