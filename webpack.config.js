module.exports = { 
  devtool: "source-map", 
  entry: __dirname + '/index.js',   
  output: { 
      filename: 'webpackbundle.js'   
   }, 
  module: { 
    rules: [ 
      { 
        test: /.js?$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader'  
        } 
      } 
    ] 
  } 
}; 