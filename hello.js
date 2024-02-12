const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    const message = { text: 'hello World'};
    res.json(message);
    
});

const port = 3000;
app.listen(port,() => {
    console.log('Server listening on port $port');
});