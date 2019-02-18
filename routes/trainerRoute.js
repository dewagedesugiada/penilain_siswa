module.exports = function (app) {
    var controller = require('../controller/trainerController');
    app.route('/trainer/list').get(controller.List);
    app.route('/trainer/').post(controller.insertData);
    app.route('/trainer/:id').get(controller.getDataById);
    app.route('/trainer/').put(controller.updateData);
    app.route('/trainer/:id').delete(controller.deleteData);
}