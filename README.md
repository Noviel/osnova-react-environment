#OSNOVA-REACT-ENVIRONMENT

###bI
ES6+ environment (Babel+Webpack2) for modern react application with OSNOVA-based server.

###Features and components

#### Client-side
 - babel
 - webpack
 - postcss
 - react
 - redux

#### Server-side 
 - osnova

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

###Structure

- `Root`
  - `root.js` - just a file to determine absolute root directory of a project.
  - `index.js` - server entry point.

###Building
`npm run build-client` and `npm run build-server` or `npm run build` for both.  

Client code will be bundled by Webpack to `/static/dist` default folder, server code will be transpiled by Babel and putted to `/server`.

###Testing
- Run some tests.

###Publishing
- Launch your application in production.