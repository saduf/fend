# Weather-Journal App Project

## Overview

This project implements an asynchronous web app in combination with [NLP Web API from Aylien](https://aylien.com/) to perform sentiment analysis on a string supplied by the user.

Some of the components used in this application are:

* Webpack: Creating a production and a development mode environment.
* Loaders: Babel, and sass.
* Plugins: html-webpack-plugin, CleanWebpackPlugin, and service workers.
* Jest - Testing of the javascript methods used to perform string validation and communication between the NLP API and the Application GUI.

## Prereqs

Obtain an [API key](https://developer.aylien.com/signup) for Aylien NLP API

## Instructions

1. Clone the repo

```
$ git clone -b refresh-2019 --single-branch https://github.com/saduf/fend.git
```

2. Navigate to the project root.
```
$ cd fend/projects/evaluate-news-nlp
```

3. Install dependencies
```
$ npm install
```

4. Crete a .env file with Aylien API key.
```
$ vi .env

# Paste the following lines and update your API_ID and API_KEY with yours:
API_ID=xxxxxxxx
API_KEY=xxxxxxxx
```

5. Build dev env.
```
$ npm run build-dev
```

6. In other terminal build prod env.
```
$ npm run build-prod
```

7. Start express server
```
$ cd src/server
$ npm start
```

8. Run jest test in other terminal
```
$ cd $PROJECT_ROOT
$ npm run test
```

You should see al tests pass.

9. Dev environment GUI will be available at localhost:8080  
You can enter a sentence to perform sentiment analysis on it, the results will be written under ```Form Results``` on the page.  
An input string validation will be done to make sure the string is not empty/null, is not only numbers, and has a proper sentence format.

10. Prod env will be available at localhost:8081  
You can access Dev and Prod GUI at the same time as they are listening on different ports.

11. Kill the server, you can interrupt the terminal where it's runnin Ctrl+c.  
Refressh the production app at localhost:8081.  
Application is displayed as part of be using service workers.
