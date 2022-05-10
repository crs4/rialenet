const express = require('express')
const PORT = process.env.PORT || 5000

  express()
  .get('/', (req, res) =>  res.send('WeNet Connector Express server example on Heroku!'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))