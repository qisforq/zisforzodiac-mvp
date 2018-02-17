const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  watch: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
       },
     },
     {
       test: /\.css/,
       loaders: ['style-loader', 'css-loader'],
       include:  /node_modules/
     }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

// module.exports = {
//   entry: './app/assets/frontend/main.jsx',
//   output: {
//     path: __dirname + '/app/assets/javascripts',
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         query: {
//           cacheDirectory: true,
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// }
