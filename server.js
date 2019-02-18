var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    logger = require('./looger/winston');


app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined', { "stream": logger.stream }));
logger.debug("Overriding 'express' logger");

app.listen(port);
logger.info('RESful API server started on port ' + port);

