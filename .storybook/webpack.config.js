const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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
      'css-loader',
      'sass-loader'
    ]
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
