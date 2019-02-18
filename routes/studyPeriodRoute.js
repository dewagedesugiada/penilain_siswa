module.exports = function (app) {
    var controller = require('../controller/studyPeriodController');
    app.route('/studyPeriod/list').get(controller.List);
    app.route('/studyPeriod/').post(controller.insertData);
    app.route('/studyPeriod/:id').get(controller.getDataById);
    app.route('/studyPeriod/').put(controller.updateData);
    app.route('/studyPeriod/:id').get(controller.deleteData);
}