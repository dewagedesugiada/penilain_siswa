const Sequelize = require('sequelize');

// request model
const bootcampBatchModel = require('../model/bootcampBatch');
const studyPeriodModel = require('../model/studyPeriod');
const studyMaterialModel = require("../model/studyMaterial");
const trainerModel = require("../model/trainer");

//create connection sequelize
const sequelize = new Sequelize('bootcamp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// added relationship on sequelize
const bootcampBatch = bootcampBatchModel(sequelize, Sequelize);
const studyPeriod = studyPeriodModel(sequelize, Sequelize);
const studyMaterial = studyMaterialModel(sequelize, Sequelize);
const trainer = trainerModel(sequelize, Sequelize);
module.exports = {
    bootcampBatch,
    studyPeriod,
    studyMaterial,
    trainer
}