#OSNOVA-REACT-ENVIRONMENT

##bI?
Modern ready-to-use environment for quick start of a new react application development.

##Features

 - ES6+ support
 - Building either a client and a server with transparently configured Webpack
 - Linting on the build stage that enforces best code writing practices
 - Server side rendering with Webpack-React-Redux stack
 - Extendable and configurable [osnova](https://github.com/Noviel/osnova) based server
 
##Components 

 - [react](https://facebook.github.io/react/)
 - [redux](http://redux.js.org/)
 - [webpack](https://webpack.js.org/)
 - [postcss](http://postcss.org/)
 - [eslint](http://eslint.org/)
 - [osnova](https://github.com/Noviel/osnova)
 - [osnova-cluster-launcher](https://github.com/Noviel/osnova-cluster-launcher)
 
##Installation

###Via git:

    git clone git@github.com:Noviel/osnova-react-environment.git <your-application-name>
    
###Or download:

    https://github.com/Noviel/osnova-react-environment/archive/master.zip
    
##Prepare
- Go to `<your-application-name>` root directory.
- Delete `.git` directory.
- Set in `package.json` information about your application.
- `npm install` or `yarn install` for dependencies.

Note that build folders are excluded from git. You need to
remove `/server` and `/static/dist` from `.gitignore` to push built version.

##Launching

```sh
npm run build
npm run start
start http://localhost:3322
```

##Structure

  Coming soon...
  
##Scripts
  
  Coming soon...


##Testing

  Coming soon...