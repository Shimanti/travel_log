//Basic app
//Uses no extra variables or content outside of express & nodemon
//node = JavaScript-based platform for server-side and networking applications
//npm = installs node programs
//Express = used with node creates a backend web server that listens for any kind
//of HTTP request on the URL http://127.0.0.1:3000/ (localhost)
//Nodemon = monitors for any changes in your source and automatically restart your server
//Mongodb = document database, which means it stores data in JSON-like documents
//Mongoose = MongoDB object modeling tool designed to work in an asynchronous environment

const express = require('express')

//Creates an instance of the express server
const app = express()

// PORT can come from environment or from a default value
const port = process.env.PORT || 3000

//The app.listen() function is used to bind and listen to the connections
//on the specified host and port. Identical to Node's http (fetch stuff?)
//Initially on user computer and then migrates to a online host
app.listen(port, () => {
  const name = "Log"
  console.log(`Listening at http://localhost:${port}`)
  console.log(`This is a basic app called ${name}`)
  console.log('This is my idea of a basic app.')
})
