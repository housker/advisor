// const fetch = require('isomorphic-fetch');
// const { getHostConfig } = require('../config');
const { insertStocksData } = require('./queries');
const fs = require('fs');

// import type { IntradayResponse } from '../types/alphavantage/index';

// const symbols = [
//   'NFLX',
//   'MSFT',
//   'AMZN',
//   'W',
//   'META'
// ];

// (function getStocksData () {

//   const { host, timeSeriesFunction, interval, key } = getHostConfig();

//   symbols.forEach((symbol) => {
//     fetch(`${host}query/?function=${timeSeriesFunction}&symbol=${symbol}&interval=${interval}&apikey=${key}`)
//     .then((res) => {
//       return res.json();
//     }) 
//     .then((data) => {
//       const symbol = data["Meta Data"]["2. Symbol"];
      
//       fs.writeFile(`/Users/adellehousker/fun/website/advisor/server/${symbol}.json`, JSON.stringify(data), err => {
//         if (err) {
//           console.error(err);
//         }
//         // file written successfully
//       });

//       // const timeSeries = data['Time Series (5min)'];
//       // if(!timeSeries) {
//       //   console.log('data when no timeSeries', data)
//       // }
//       // Object.keys(timeSeries)?.map((key) => {
//       //   const dataPoint = timeSeries[key];
//       //   const payload = [
//       //     symbol,
//       //     dataPoint['2. high'],
//       //     dataPoint['3. low'],
//       //     dataPoint['1. open'],
//       //     dataPoint['4. close'],
//       //     dataPoint['5. volume'],
//       //     key,
//       //   ];
//       //   insertStocksData(payload);
//       // });
//     });
//   })
// })()


(function getStocksData () {


const folderPath = './data';

const fileNames = fs.readdirSync(folderPath);

fileNames.forEach((file) => {
  fs.readFile(`./data/${file}`, 'utf8', (err, rawData) => {
    if (err) {
      console.error(err);
      return;
    }
    const data = JSON.parse(rawData);
    const symbol = data["Meta Data"]["2. Symbol"];
    const timeSeries = data['Time Series (5min)'];
    if(!timeSeries) {
      console.log('data when no timeSeries', data)
    }
    Object.keys(timeSeries)?.map((key) => {
      const dataPoint = timeSeries[key];
      const payload = [
        symbol,
        dataPoint['2. high'],
        dataPoint['3. low'],
        dataPoint['1. open'],
        dataPoint['4. close'],
        dataPoint['5. volume'],
        key,
      ];
      insertStocksData(payload);
    });
  });
})



})()
