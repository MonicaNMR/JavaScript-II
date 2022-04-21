const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./js/clima.js",
    about: "./js/formulario.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
 // mode: "development",
  plugins: [
    /*
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new HTMLWebpackPlugin({
      filename: "about.html",
      template: "./public/about.html",
    }),
    */
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ['home']
    }),
    new HTMLWebpackPlugin({
      filename: "solicita_cita.html",
      template: "./paginas/solicita_cita.html",
      chunks: ['about']
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    static: './dist'
  }  
};