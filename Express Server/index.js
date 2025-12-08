//1.create express server directory
//2. cd to that directory
//3.create index.js
//4. npm install express
//5. write server application in index.js
//6.start server

//netstat -ano | findstr "LISTENING"    this is for showing all the ports that are currently running on my computer (local host)

import express from "express";
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})