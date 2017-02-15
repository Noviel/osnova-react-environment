// Created by snov on 21.09.2016.

const postCSSConfig = [
  require('postcss-use')({
    modules: [
      /* autoprefix for different browser vendors */
      require('autoprefixer'),

      require('precss'),

      /* reset inherited rules */
      require('postcss-autoreset')({
        reset: 'interited'
      }),
      require('postcss-initial')({
        reset: 'inherited' // reset only inherited rules
      }),

      /* enable css @imports like Sass/Less */
      require('postcss-import'),
      /* enable mixins like Sass/Less */
      // require('postcss-mixins')({
      //   mixins: require('../src/mixins')
      // }),

      /* require global variables */
      // require('postcss-simple-vars')({
      //   variables: function variables() {
      //     return require('../src/variables')
      //   },
      //   unknown: function unknown(node, name, result) {
      //     node.warn(result, 'Unknown variable ' + name)
      //   }
      // }),
  ]}),
];

// Export the PostCSS Config for usage in webpack
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('precss'),
    /* reset inherited rules */
    require('postcss-autoreset')({
      reset: 'initial'
    }),
    require('postcss-initial')({
      reset: 'inherited' // reset only inherited rules
    }),
    /* enable css @imports like Sass/Less */
    require('postcss-import'),
  ]
};