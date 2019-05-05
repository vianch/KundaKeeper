const express = require("express");
const bodyParser = require("body-parser");

const axios = require("axios");
const uuidv1 = require("uuid/v1");

const API_URL = "https://api-tst.minka.io/v1";
const DOMAIN = "kunda";
const COIN_HANDLE = "$kundacoin";

async function requestToken() {
  let res = await axios({
    method: "POST",
    url: "https://api-tst.minka.io/oauth/token",
    data: {
      client_id: "dF91bb557B2e6ad7B6DBf729f3d23EEa",
      secret: "AFcc2EB8c12A3a07fcB5EaD365c83dC8d78e8FBa6FABA963",
      grant_type: "client_credentials",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-api-key": "B42Ed4a859B829Fd8CbBadF1EcfFeCAbA5ECcdD0F75BFc2fcE7D6EEe",
    },
  });
  return res.data;
}

async function updateMikaAuth() {
  let data = await requestToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    data.access_token
  }`;
  axios.defaults.headers.common["x-api-key"] =
    "B42Ed4a859B829Fd8CbBadF1EcfFeCAbA5ECcdD0F75BFc2fcE7D6EEe";
}

async function setup() {
  await updateMikaAuth();
}

// Services
async function createWallet() {
  const handle = `$kunda${uuidv1().substring(0, 5)}`;
  return await createWalletByHandle(handle, "PERSON", {});
}

async function createWalletByHandle(
  handle,
  type = "TROUPE",
  additionalLabels = {},
) {
  // Create signer
  const signer = await createSigner();

  let res = await axios({
    method: "POST",
    url: `${API_URL}/wallet`,
    data: {
      handle: handle,
      labels: {
        domain: DOMAIN,
        type: type,
        ...additionalLabels,
      },
    },
  });
  const wallet = res.data;

  // Bind signer to wallet
  res = await axios({
    method: "PUT",
    url: `${API_URL}/wallet/${handle}`,
    data: {
      signer: [`${signer.handle}`],
      default: `${signer.handle}`,
    },
  });
  // This should be the updated wallet with a handler
  return res.data;
}

async function createSigner() {
  let res = await axios({
    method: "POST",
    url: `${API_URL}/signer`,
    data: {
      labels: {
        domain: DOMAIN,
      },
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

async function getWallets() {
  let res = await axios.get(`${API_URL}/wallet?labels.domain=${DOMAIN}`);
  return res.data.entities;
}

function getSigners() {
  let res = axios.get(`${API_URL}/signer?labels.domain=${DOMAIN}`);
  return res.data;
}

async function buyCoin(handle, amountString) {
  let res = await axios({
    method: "POST",
    url: `${API_URL}/action`,
    data: {
      source: COIN_HANDLE,
      target: handle,
      amount: amountString,
      symbol: COIN_HANDLE,
      labels: {
        type: "ISSUE",
        domain: DOMAIN,
      },
    },
  });
  const action = res.data;
  const action_id = action.action_id;

  // We sign now:
  res = await axios({
    method: "POST",
    url: `${API_URL}/action/${action_id}/signed`,
    data: {
      labels: {},
    },
  });

  return res.data;
}

async function getBalance(handle) {
  let res = await axios.get(
    `${API_URL}/wallet/${handle}/balance?unit=${COIN_HANDLE}`,
  );
  return res.data;
}

async function makePayment(sourceHandler, targetHandler, amountString) {
  // Create transaction
  let res = await axios({
    method: "POST",
    url: `${API_URL}/action`,
    data: {
      source: sourceHandler,
      target: targetHandler,
      amount: amountString,
      symbol: COIN_HANDLE,
      labels: {
        type: "SEND",
        domain: DOMAIN,
      },
    },
  });
  const action = res.data;
  const action_id = action.action_id;

  // We sign now:
  res = await axios({
    method: "POST",
    url: `${API_URL}/action/${action_id}/signed`,
    data: {
      labels: {},
    },
  });

  return res.data;
}

async function createKundacoin() {
  // Create signer
  const signer = await createSigner();

  // Create Wallet
  const handle = COIN_HANDLE;

  let res = await axios({
    method: "POST",
    url: `${API_URL}/wallet`,
    data: {
      handle: handle,
      labels: {
        domain: DOMAIN,
        type: "symbol",
      },
    },
  });
  const wallet = res.data;

  // Bind signer to wallet
  res = await axios({
    method: "PUT",
    url: `${API_URL}/wallet/${handle}`,
    data: {
      signer: [`${signer.handle}`],
      default: `${signer.handle}`,
    },
  });
  // This should be the updated coin with a handle
  return res.data;
}

async function getTransactions() {
  let res = await axios.get(`${API_URL}/action?labels.domain=${DOMAIN}`);
  return res.data.entities;
}

module.exports = {
  getBalance,
  makePayment,
  buyCoin,
  createKundacoin,
  createWallet,
  getWallets,
  createWalletByHandle,
  setup,
  getTransactions,
};

/*
// Express
const app = express();

// middleware
app.use(bodyParser.json());

app.post("/buy", (req, res) => {
  const handle = req.body.handle;
  const amountString = req.body.amountString;

  buyCoin(handle, amountString).then(transactionData => {
    res.send(transactionData);
    console.log("User received coins!");
  });
});

app.post("/pay", (req, res) => {
  const sourceHandle = req.body.sourceHandle;
  const targetHandle = req.body.targetHandle;
  const amountString = req.body.amountString;

  makePayment(sourceHandle, targetHandle, amountString).then(
    transactionData => {
      res.send(transactionData);
    },
  );
});

// TODO
app.post("/newAccount", (req, res) => {});

// TODO
app.post("/login", (req, res) => {});

app.get("/balance", (req, res) => {
  handle = req.body.handle;
  getBalance(handle).then(balanceData => {
    res.send(balanceData);
  });
});
*/
/*
async function run() {
    await setup();
    getWallets();
    app.listen(3000, () => {console.log("Server rooolliing!")});
}

run()
*/
