        // fetching results from API URL

const https = require('https');
const db = require('./DataBase');
const url = 'https://api.wazirx.com/api/v2/tickers';

exports.fetchData=function(){

https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const parsedData = JSON.parse(data);
        
        var requiredData=[];
        for(key in parsedData)
        {
            requiredData[requiredData.length]=parsedData[key];

        }
        var requiredTenData=[];
        for(let i=0; i<10; ++i)
        {
            requiredTenData[requiredTenData.length]={
                'name': requiredData[i].name,
                'last': requiredData[i].last,
                'sell' : requiredData[i].sell,
                'buy' : requiredData[i].buy,
                'volume' : requiredData[i].volume,
                'base_unit' : requiredData[i].base_unit,
            }
        }

        var writeData={'data':requiredTenData}

        const dataBase = new db.DataBase();
        dataBase.storeInDatabase(writeData);
    });
});

}