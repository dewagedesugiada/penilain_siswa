module.exports = function (app) {
    var controller = require('../controller/bootcampBatchController');

    app.route('bootcampBatch/list').get(controller.List);
    app.route('bootcampBatch').post(controller.insertData);
    app.route('bootcampBatch/:id').get(controller.getDataById);
    app.route('bootcampBatch/').put(controller.updateData);
    app.route('bootcampBatch/:id').delete(controller.deleteData);
}