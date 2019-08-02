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

        server.use('/api/getCatProduction', (req, res) => {
            res.setHeader('Content-Type', 'application/json');

            db.fetchData(models.prodCatQuery(), (error, result) => {
                if(error) 
                    console.log(error);
                else {
                    res.json(result);
                }
            });
        });

        server.use('/api/getProduction', (req, res) => {
            res.setHeader('Content-Type', 'application/json');

            let categories = [
                "primary_sources",
                "rechargeable_batteries", 
                "zru"
            ];

            let dataContainer = {cat: [], prod: {}};
            let containerKey = 'default';
            
            db.fetchData(models.prodCatQuery(), (error, result) => {
                if(error) 
                    console.log(error);
                else {
                    dataContainer.cat = result;
                }

                for(let index = 0; index < categories.length; index++) {
                    db.fetchData(models.productionQuery(categories[index]), (error, result) => {
                        if(error)
                            console.log(error);
                        else {
                            containerKey = categories[index];
                            dataContainer.prod[containerKey] = result;

                            if(index == categories.length - 1)
                                res.json(dataContainer);
                        }
                    });
                };
            });
        });

        server.use('/api/getNews', (req, res) => {
            res.setHeader('Content-Type', 'application/json');

            db.fetchData(models.newsList(), (error, result) => {
                if(error)
                    console.log(error);
                else {
                    res.json(result);
                }
            });
        });

        server.use('/api/getInformations', (req, res) => {
            res.setHeader('Content-Type', 'application/json');

            db.fetchData(models.informationList(), (error, result) => {
                if(error)
                    console.log(error);
                else {
                    res.json(result);
                }
            })
        });
    }
}