const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
  }); 

const file_router = require('./routes/router.js')

  app.use('/file',file_router);