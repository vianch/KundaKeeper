const dialogflow = require("dialogflow");
const uuid = require("uuid");

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
function runSample(projectId = "kundalini-agent") {
  // A unique identifier for the given session
  const sessionId = uuid.v4();
  const languageCode = "es";
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: "Hola",
        languageCode,
      },
    },
  };

  sessionClient
    .detectIntent(request)
    .then(responses => {
      // const result = responses[0].queryResult;
      // console.log("response dialogflow: ", result);
    })
    .catch(err => {
      //console.error("ERROR:", err);
    });
}

runSample("kundalini-agent");
