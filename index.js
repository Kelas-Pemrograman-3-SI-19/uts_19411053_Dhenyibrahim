const express = require('express')
const app = express()

// list route
app.use('/user', require('./routes/User'))

app.listen(5000, function () {
  console.log('Server Started at port 5000')
})
