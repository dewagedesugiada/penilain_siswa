const Sequelize = require('sequelize');

// request model
const BootcampBatchModel = require('../model/bootcampBatch');

//create connection sequelize
const sequelize = new Sequelize('bootcamp', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 10,
        min: 0,
        idle: 10000,
        acquire: 3000
    }
});

// added relationship on sequelize
const BootcampBatch = BootcampBatchModel(sequelize, Sequelize);

module.exports = {
    BootcampBatch
}