
const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 

app.get('/hello', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
});

app.get('/mode', (req, res)=>{ 
    res.set('Content-Type', 'application/json'); 
    const list = ['light','dark']
    let mode = list[Math.floor(Math.random() * list.length)]
    res.status(200).send(JSON.stringify({mode})); 
});

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port: "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 