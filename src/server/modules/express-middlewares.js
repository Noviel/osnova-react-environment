// Created by snov on 13.02.2017.
//
// Define some express middlewares
//
//=========================================================================

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export default function middlewares({ express } = {}) {
  return (osnova) => {
    const app = express || osnova.express;

    if (!app) {
      throw new Error('No express object were provided.');
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    if (typeof osnova == 'object') {
      osnova.next({cookieParser});
    }
  };
}