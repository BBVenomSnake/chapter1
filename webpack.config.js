const path=require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
module.exports={
    entry:path.join(__dirname + '/src/main.js'),
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode:"development",
    plugins :[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
      }
}