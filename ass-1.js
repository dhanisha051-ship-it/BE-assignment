
const fs = require("fs");

const now = new Date();

const date = now.toLocaleDateString("en-GB");

const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}) ;

const url = "http://localhost:5000";

const log = date + ":" + time + "-" + url + "\n";

fs.appendFile("grafana.txt", log, (err) => {
    if (err) {
        console.log("Error");
    } else {
        console.log("Log saved successfully");
        console.log(log);
    }
});