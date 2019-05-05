"use strict";
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const dialogflow = require("dialogflow");
const uuid = require("uuid");
const app = express();
const port = 3033;

// our server instance
const server = http.createServer(app);
const io = socketIO(server);

// Middleware setup
app.use(express.static("dist"));
app.use(bodyParser.json());

// Socket IO setup for the chat
io.sockets.on("connection", socket => {
  const languageCode = "es";
  const sessionClient = new dialogflow.SessionsClient();
  console.log("A client connected!");
  // Minka call for the dashboard
  setInterval(() => {
    minkaApi.getTransactions().then(transactions => {
      console.log("Trasnactions emitted!");
      socket.emit("transactions", transactions);
    });
  }, 15000);

  socket.on("greetings", message => {
    socket.emit("chat_message_response", message);
  });

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
        socket.emit("chat_message_response", `${result}`);
      })
      .catch(err => {
        console.error("ERROR:", err);
      });
  });
});

// Minka API endpoints
const minkaApi = require("./minkaApi");

app.post("/buy", (req, res) => {
  const handle = req.body.handle;
  const amountString = req.body.amountString;

  minkaApi.buyCoin(handle, amountString).then(transactionData => {
    res.send(transactionData);
    console.log("User received coins!");
  });
});

app.post("/pay", (req, res) => {
  const sourceHandle = req.body.sourceHandle;
  const targetHandle = req.body.targetHandle;
  const amountString = req.body.amountString;

  minkaApi
    .makePayment(sourceHandle, targetHandle, amountString)
    .then(transactionData => {
      res.send(transactionData);
    });
});

app.get("/balance", (req, res) => {
  const handle = req.body.handle;
  console.log(handle);
  minkaApi.getBalance(handle).then(balanceData => {
    res.send(balanceData);
  });
});

// TODO
app.post("/newAccount", (req, res) => {});

// TODO
app.post("/login", (req, res) => {});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
});

// wildcard
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// start the server
async function run() {
  await minkaApi.setup();
  server.listen(port, () => console.log(`Listening on port ${port}`));
}

run();
