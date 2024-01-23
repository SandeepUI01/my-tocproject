const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  //publicDir :true,
  base :'/my-tocproject/',
  build: {
    outDir: './dist'
  },
  server: {
    port: 8080
  }
}
