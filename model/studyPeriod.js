module.exports = (sequelize, type) => {
    return sequelize.define('study_period', {
        weekId: {
            field: 'week_id',
            type: type.INTEGER,
            primaryKey: true
        },
        description: type.TEXT,
        activeFlag: {
            field: 'active_flag',
            type: type.ENUM('1', '0'),
            defaultValue: '1'
        }
    }, {
            tableName: 'study_period',
            timestamps: false
        })
}