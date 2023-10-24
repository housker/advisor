const { getHostConfig } = require('../config');
const { insertStocksData } = require('./queries2');
const fs = require('fs');


(async function getStocksData () {

    const apiConfig = getHostConfig();
    const { host, timeSeriesFunction, interval, key } = apiConfig;
    const insertStockDataPromises = [];

    const folderPath = './data';

    const fileNames = fs.readdirSync(folderPath);

    fileNames.forEach(async (file) => {
        fs.readFile(`./data/${file}`, 'utf8', (err, rawData) => {
          if (err) {
            console.error(err);
            return;
          }
          const data = JSON.parse(rawData);
          const symbol = data["Meta Data"]["2. Symbol"];
          const timeSeries = data['Time Series (5min)'];
          const dataPoints = Object.keys(timeSeries).map((key) => {
            const dataPoint = timeSeries[key];
            return {
              symbol,
              high: dataPoint['2. high'],
              low: dataPoint['3. low'],
              open: dataPoint['1. open'],
              close: dataPoint['4. close'],
              volume: dataPoint['5. volume'],
              time: key
            }
          });
          insertStockDataPromises.push(insertStocksData(dataPoints));
        });
        await Promise.all(insertStockDataPromises);
    });
  })()