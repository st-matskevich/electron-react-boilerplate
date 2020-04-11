const path = require('path');

module.exports = {
  entry: './src/electron/preload.js',
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, 'build'),
  },
};