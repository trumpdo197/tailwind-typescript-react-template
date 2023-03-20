const CracoAlias = require('craco-alias');

module.exports = {
  // TODO: Add PostCSS Nesting for BOTH Storybook and React App
  // style: {
  //   postcss: {
  //     loaderOptions: (postcssLoaderOptions) => {
  //       postcssLoaderOptions.postcssOptions.plugins = [
  //         require('tailwindcss/nesting'),
  //         require('tailwindcss')
  //       ];

  //       return postcssLoaderOptions;
  //     }
  //   }
  // },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};
