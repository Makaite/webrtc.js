const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename:'webrtc.js',
    path: path.resolve(__dirname, 'lib')
  }
}
