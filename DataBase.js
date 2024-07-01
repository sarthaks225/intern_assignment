const fs=require('fs');

exports.DataBase=class
{
    constructor()
    {
        if(! fs.existsSync('./data.db'))
        {
            fs.writeFileSync('./data.db',''); // creating a empty database file when dtabase file does not exists
        }
    }

    storeInDatabase(data)
    {
        fs.writeFileSync('./data.db',JSON.stringify(data));
    }

    retrieveFromDatabase()
    {
        return JSON.parse(fs.readFileSync('./data.db','utf-8'));
    }

}