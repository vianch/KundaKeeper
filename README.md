# KundaKeeper

## Installation and Usage

The recommended installation method is a local NPM install for your project:
```bash
$ npm install
or 
$ yarn install
```

...in Package `package.json` file you will find the scripts commands:
```
# Inside package.json...
 "scripts": {
     "start": "npm run server",
     "webpack:server": "webpack-dev-server --mode development --open",
     "test": "jest --coverage",
     "dev": "webpack -w --mode development",
     "build": "webpack --mode production",
     "server": "node server/index.js"
   },
```

With the above script entry, you can then start the server  via:
```bash
$ npm start
```

With the above script entry, you can do a develop build  via:
```bash
$ npm run dev
```

With the above script entry, you can do a production Deploy  via:
```bash
$ npm run build
```

## Custom Configuration

you need create an environment variables in a file called .env

```bash
ENVIRONMENT=development
URL=http://localhost:3034/
PROJECT_ID=kundalini-agent
```

Local deployments need set environments variables,  you can find
google credentials inside server folder (kundalini-agent.json)
```bash
export GOOGLE_APPLICATION_CREDENTIALS="PATH WITH GOOGLE CREDENTIALS"
export GCLOUD_PROJECT="kundalini-agent"
```

server is running in port :3033 (localhost:3033) you can edit this in server/index.js line 14
```json
const port = 3033;
```

In webpack.config.js if you want to do change deploy to production you have to change line 12
```js
const developmentEnvironment = "development"; to
const developmentEnvironment = "production";
```
