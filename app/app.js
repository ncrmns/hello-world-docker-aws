const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req,res)=>{
  res.send('hello world');
});
app.listen(PORT, ()=> console.log('app is runing on port : '+ PORT));

