// Created by snov on 06.02.2017.
//
// Helper functions for configuring webpack.
//
/////////////////////////////////////////////////////////////////

const CSSLocalIdentName = 'localIdentName=[local]--[hash:base64:5]';

module.exports = {

  getCssLoaderConfigString: opts => {
    const props = [
      opts.modules ? 'modules' : '',
      opts.local ? CSSLocalIdentName : ''
    ];

    return `css-loader?`.concat(props.join('&'));

  }
};