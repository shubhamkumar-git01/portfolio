// fetch(web API) - used to sent http request to servers.

//  it can made differences of these
// GET, POST, PUT/UPDATE, DELETE

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    console.log(data);
})