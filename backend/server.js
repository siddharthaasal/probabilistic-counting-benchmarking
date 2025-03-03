import express from "express";

const app = express();


const portNumber = 3000;


app.listen(portNumber, () => {
    console.log(`Server started on port ${portNumber}`);
})