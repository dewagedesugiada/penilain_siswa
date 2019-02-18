module.exports = (sequelize, type) => {
    return sequelize.define('bootcamp_batch', {
        batchId: {
            field: 'batch_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.TEXT,
        sequence: type.INTEGER,
        startDate: {
            field: 'start_date',
            type: type.DATE
        },
        finishDate: {
            field: 'finish_date',
            type: type.DATE
        }
    }, {
            tableName: 'bootcamp_bacth',
            timestamps: false
        })
}