const express = require('express');
const path = require('path')
const webpack = require('webpack');

//const config = require('./webpack.config.js');
// const dummy = require('./routes/dummy_router.js');

// APP SETUP & MIDDLEWARE
const app = express();
app.use(express.static(__dirname));

// const compiler = webpack(config);
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => (
  res.sendFile(path.resolve(__dirname, 'index.html'))
));

const PORT = process.env.PORT || 4000
app.listen(PORT, () => (
	console.log("App running on port ", PORT)
))