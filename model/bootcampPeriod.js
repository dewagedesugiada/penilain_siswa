module.exports = (sequelize, type) => {
    return sequelize.define('bootcamp_period', {
        bootcampPeriodlId: {
            field: 'bootcamp_period_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        batchId: {
            field: 'bacth_id',
            type: type.INTEGER,
            references: {
                model: 'bootcamp_batch',
                key: 'batchId'
            }
        },
        weekId: {
            field: 'week_id',
            type: type.INTEGER,
            references: {
                model: 'study_period',
                key: 'weekId'
            }
        },
        description: type.TEXT,
        activeFLag: {
            field: 'active_flag',
            type: type.ENUM('0', '1'),
            defaultValue: '1'
        }
    }, {
            tableName: 'bootcamp_period',
            timestamps: false
        })
}