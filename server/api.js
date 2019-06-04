const db = require('./db/db.js');
const models = require('./models/models.js');

module.exports = {
    initApi(server) {
        server.get('/api/getHistoryData', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            
            db.fetchData(models.dataQuery('/history'), (error, result) => {
                if(error)
                    console.log(error);
                else {
                    result.map(props => {
                        res.json(props);
                    })
                }
            });
        });

        server.get('/api/getActivityData', (req, res) => {
            res.setHeader('Content-Type', 'application/json');

            db.fetchData(models.dataQuery('/activity'), (error, result) => {
                if(error) 
                    console.log(error);
                else {
                    result.map(props => {
                        res.json(props);
                    });
                }
            });
        });
    }
}