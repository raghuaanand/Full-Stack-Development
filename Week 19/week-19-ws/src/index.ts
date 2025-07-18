import express from "express";
import {WebSocketServer, WebSocket } from "ws";

const app = express();
const port = 8080;
const httpserver = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
});

const wss = new WebSocketServer({ server: httpserver});

wss.on("connection", function connection(socket){
    socket.on('error', (err) => console.error(err));
    let userCount = 0;
    socket.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary });
            }
        });
    });
    console.log("Total users connected: " + ++userCount);
    socket.send("Welcome to the WebSocket server!");
})