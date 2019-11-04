const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts')
  config.resolve.alias['@'] = path.resolve(__dirname, '../')

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
    ]
  })

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('autoprefixer'),
            require('postcss-sorting')(
              {
                'properties-order': 'alphabetical',
                'unspecified-properties-position': 'bottom'
              }
            )
          ]
        }
      },
      'sass-loader'
    ]
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())
  config.plugins.push(new StylelintPlugin({
    files: [
      '**/*.vue',
      '**/*.scss',
    ],
  }))

  return config
}
