const fetchData=require('./fectchData');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

require('./fectchData').fetchData();
var data=(new (require('./DataBase')).DataBase()).retrieveFromDatabase().data;

// Example data (replace with actual data retrieval logic)
/*
const data = [
  { name: 'Bitcoin', last: 35000, buy: 34950, sell: 35050, volume: 100, base_unit: 'BTC' },
  { name: 'Bitcoin', last: 35000, buy: 34950, sell: 35050, volume: 100, base_unit: 'BTC' },
  { name: 'Bitcoin', last: 35000, buy: 34950, sell: 35050, volume: 100, base_unit: 'BTC' },
  { name: 'Ethereum', last: 2200, buy: 2195, sell: 2205, volume: 200, base_unit: 'ETH' }
];
*/
// Serve static files such as styles.css and script.js
app.use(express.static('./'));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

// Route to serve data as JSON
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});