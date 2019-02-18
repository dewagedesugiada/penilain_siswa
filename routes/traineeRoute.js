module.exports = function (app) {
    var controller = require('../controller/traineeController');
    app.route('/trainee/list').get(controller.List);
    app.route('/trainee/').post(controller.insertData);
    app.route('/trainee/:id').get(controller.getDataById);
    app.route('/trainee/').put(controller.updateData);
    app.route('/trainee/:id').delete(controller.deleteData);
}