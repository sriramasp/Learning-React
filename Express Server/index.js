//1.create express server directory
//2. cd to that directory
//3.create index.js
//4. npm install express
//5. write server application in index.js
//6.start server using command node index.js

//netstat -ano | findstr "LISTENING"    this is for showing all the ports that are currently running on my computer (local host)

//use nodemon index.js to run the server for every change u make automatically

import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>HEllo</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/sriram", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/sriram", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})