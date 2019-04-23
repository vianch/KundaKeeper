"use strict";
/* eslint no-console: 0 */
/* eslint no-undef: 0 */
// https://devhints.io/fastify
require("colors");
const fastify = require("fastify")();
const staticHandler = require("fastify-static");
const path = require("path");
const port = 3033;

// Declare a route
fastify.register(staticHandler, {
  root: path.join(__dirname, "../dist"),
  prefix: "/", // optional: default "/"
});

// Run the server!
fastify.listen(port, (err, address) => {
  if (err) throw err;

  console.log("Server is running".cyan);
  console.log(`server listening on ${address}`.yellow);
});
