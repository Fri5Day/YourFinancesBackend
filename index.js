const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/v1', require('./src/routes/routes'))

app.listen(3000, error => {
    if (error){
        console.log(error)
        return
    }
    console.log('running')
})

