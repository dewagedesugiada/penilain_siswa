module.exports = function (app) {
    var controller = require('../controller/studyMaterialController');
    app.route('/studyMaterial/list').get(controller.List);
    app.route('/studyMaterial/').post(controller.insertData);
    app.route('/studyMaterial/:id').get(controller.getDataById);
    app.route('/studyMaterial/').put(controller.updateData);
    app.route('/studyMaterial/:id').delete(controller.deleteData);
}