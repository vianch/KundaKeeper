"use strict";
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

require("colors");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const dialogflow = require("dialogflow");
const uuid = require("uuid");
const app = express();
const port = 3033;

// our server instance
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("dist"));

io.sockets.on("connection", socket => {
  const languageCode = "es";
  const sessionClient = new dialogflow.SessionsClient();

  socket.on("chat_message", message => {
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.sessionPath("kundalini-agent", sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode,
        },
      },
    };

    sessionClient
      .detectIntent(request)
      .then(responses => {
        const result = responses[0].queryResult.fulfillmentText;
        io.emit("chat_message_response", `${result}`);
      })
      .catch(err => {
        console.error("ERROR:", err);
      });
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
