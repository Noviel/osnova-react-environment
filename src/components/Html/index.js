// Created by snov on 15.02.2017.
//
// Html document helper for server rendering
//
//=========================================================================

import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

export default function Html({ assets, component/*, store */}) {
  const content = component ? renderToString(component) : '';
  const head = Helmet.rewind();

  return (
    <html lang='en-us'>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <link rel='shortcut icon' href='/favicon.png'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>

        {
          Object.keys(assets.styles).map((style, key) =>
          <link href={assets.styles[style]} key={key} media='screen, projection'
                rel='stylesheet' type='text/css' charSet='UTF-8'/>)
        }
      </head>
      <body>
        <div id='content' dangerouslySetInnerHTML={{__html: content}}/>
        {
          Object.keys(assets.scripts).map((script, key) =>
            <script src={assets.scripts[script]} key={key}/>)
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};
