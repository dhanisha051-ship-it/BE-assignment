const express = require("express");
const app = express();
const fs = require("fs");

app.get("/create", (req, res) => {
    fs.writeFileSync("demo.txt", "Hello World");
    console.log("File Created");
    res.send("File Created");
});

app.get("/read", (req, res) => {
    const data = fs.readFileSync("demo.txt", "utf8");
    console.log(data);
    res.send(data);
});

app.get("/append", (req, res) => {
    fs.appendFileSync("demo.txt", "\nhii");
    console.log("File Appended");

    const data = fs.readFileSync("demo.txt", "utf8");
    res.send(data);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});