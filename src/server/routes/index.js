// Created by snov on 29.11.2016.

export default function addRoutes (opts) {

  return (osnova) => {
    const app = osnova.express;

    app.get('*', (req, res) => {
      res.render('index');
    });

    osnova.moduleReady();
  }

}