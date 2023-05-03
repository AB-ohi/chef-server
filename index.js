const express = require('express')
const app = express()
const port = process.env.port || 1000

app.get('/', (req, res) =>{
    res.send('restureand is running')
});

app.listen(port, ()=>{
    console.log(`api is running on port:${port}`)
})