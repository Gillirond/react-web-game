const express = require("express");
const fs = require("fs");
const cors = require("cors");
const {shuffle} = require("./utils/array");


const app = express();
app.use(cors());
app.options("*", cors());
// создаем парсер для данных в формате json
const jsonParser = express.json();

const questionsDir = "questions";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Length, Authorization, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});

app.get("/questions/dare", function (request, response) {
    const content = fs.readFileSync(`${questionsDir}/dare.json`, "utf8");
    let questionsDare = JSON.parse(content);

    const usedIds = request.query.usedids || [];
    const result = shuffle(questionsDare.filter(item => usedIds.indexOf(item.id) === -1)).slice(0, 5)

    response.send(result);
});

app.get("/questions/truth", function (request, response) {
    const content = fs.readFileSync(`${questionsDir}/truth.json`, "utf8");
    let questionsTruth = JSON.parse(content);

    const usedIds = request.query.usedids || [];
    const result = shuffle(questionsTruth.filter(item => usedIds.indexOf(item.id) === -1)).slice(0, 5)

    response.send(result);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});