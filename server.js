var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var logger = require('./logger/winston');


app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined', { "stream": logger.stream }));
logger.debug("Overriding 'express' logger");

var bootcampBatchRoute = require('./routes/bootcampBatchRoute');
bootcampBatchRoute(app);

var studyPeriodRoute = require('./routes/studyPeriodRoute');
studyPeriodRoute(app);

var studyMaterialROute = require('./routes/studyMaterialRoute');
studyMaterialROute(app);

var trainer = require("./routes/trainerRoute");
trainer(app);

var trainee = require("./routes/traineeRoute");
trainee(app);

app.listen(port);
logger.info('RESful API server started on port ' + port);

