const { trainer } = require('../db/connection');
const logger = require('../logger/winston');

exports.getAll = function getAll(callback) {
    trainer.findAll()
        .then((results) => {
            return callback(null, results);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.getById = function getById(id, callback) {
    trainer.findById(id)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.insert = function insert(data, callback) {
    trainer.create(data)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.update = function update(id, data, callback) {
    trainer.update(data, {
        where: { trainerId: data.trainerId },
        returning: true,
        plain: true
    })
        .then((result) => {
            logger.info(result);
            return callback(null, data);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.del = function del(id, callback) {
    trainer.destroy({
        where: { trainerId: id }
    })
        .then((result) => {
            return callback(null, id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}
