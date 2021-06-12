const http = require("http");
const express = require("express");
const WebSocket = require("ws");

const app = express();

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({server});

webSocketServer.on('connection', ws => {
    const clockInterval = setInterval(() => {
        ws.send(JSON.stringify({
            currentDate: Date.now()
        }))
    }, 1000)

    ws.on('message', m => {
        ws.send(`Hello, you sent -> ${m}`);
        //webSocketServer.clients.forEach(client => client.send(m));
    });

    ws.on("error", e => ws.send(e));
});

server.listen(process.env.PORT || 3001, () => {
    console.log(`Server started on port ${server.address().port}`);
});