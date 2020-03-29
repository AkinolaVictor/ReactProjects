const path = require('path');

//console.log(path.join(__dirname, "public"))

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename:'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                'file-loader'
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
         contentBase: path.join(__dirname, "public")
    }

};
// npm install file-loader --save-dev
//import img from './file.png'