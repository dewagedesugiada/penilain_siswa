const { studyPeriod } = require('../db/connection');
const logger = require('../logger/winston');

exports.getAll = function getAll(callback) {
    studyPeriod.findAll()
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}
