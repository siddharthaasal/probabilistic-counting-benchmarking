import express from "express";
import apiRoutes from "./src/api/index.js";


const app = express();
app.use("/api", apiRoutes);

const portNumber = 3000;


app.listen(portNumber, () => {
    console.log(`Server started on port ${portNumber}`);
})