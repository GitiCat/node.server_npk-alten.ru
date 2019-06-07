const db = require('./db/db.js');
const models = require('./models/models.js');

module.exports = {
    initApi(server) {
        server.use('/api/getHistoryData', (req, res) => {
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

        server.use('/api/getActivityData', (req, res) => {
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

        server.use('/api/getProduction', (req, res) => {
            console.log(models.prodCatQuery('zru'));
            res.setHeader('Content-Type', 'application/json');

            db.fetchData(models.prodCatQuery('zru'), (error, result) => {
                if(error) 
                    console.log(error);
                else {
                    result.map(props => {
                        res.json(props);
                    })
                }
            });
        });
    }
}