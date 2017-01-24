#OSNOVA ADVANCED APPLICATION

###bI
OSNOVA application with configured ES2016+ environment (Babel+Webpack) and react for the client

###Install

####via git (preferable)

    git clone git@github.com:Noviel/osnova-react-environment.git <your-application-name>

####or via download

    https://github.com/Noviel/osnova-react-environment/archive/master.zip
  and uznip to new project directory.

###Prepare
- Go to `<your-application-name>` root directory.
- Delete `.git` directory.
- `npm install` or `yarn install` for dependencies.
- Set in `package.json` information about your application.

###Coding
- Write some cool code in `src/client` and `src/server` folders.

`index.js` in both directories are entry points for client/server.
This system is server-first in some aspects.
Common code used at server and at client is treated as more server-side and located in `src/server/common`.

###Building

- Run `npm run build` to build your revolutionary changes in code.

`Webpack`+`Babel` build and transpile the client code to ES5 and produce a single `client/js/main.js` file,
and `Babel` transpiles server's code and put it into `server` directory.

###Testing
- Run some tests.

###Publishing
- Launch your application in production.