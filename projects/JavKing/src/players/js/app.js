
// Instantiating new EasyHTTP class
const http = new EasyHTTP;
// User Data
const data = {
    name: 'sunny yadav',
    username: 'sunnyyadav',
    email: 'sunny@gmail.com'
  }
  
// Update Post
http.put(
'https://jsonplaceholder.typicode.com/users/2',
     data)
  
// Resolving promise for response data
.then(data => console.log(data))
  
// Resolving promise for error
.catch(err => console.log(err));