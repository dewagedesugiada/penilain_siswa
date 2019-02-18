module.exports = (sequelize, type) => {
    return sequelize.define('trainee', {
        traineeId: {
            field: "trainee_id",
            type: type.INTEGER,
            primaryKey: true
        },
        firstName: {
            field: "first_name",
            type: type.STRING
        },
        lastName: {
            field: "last_name",
            type: type.STRING
        },
        email: type.STRING,
        phone: type.STRING,
        address: type.STRING,
        batchId: {
            field: "batch_id",
            type: type.INTEGER,
            ononDelete: 'CASCADE',
            references: {
                model: 'bootcamp_batch',
                key: 'batchId'
            }
        },
        activeFlag: {
            field: "active_flag",
            type: type.ENUM("0", "1"),
            defaultValue: "1"
        }

    }, {
            tableName: "trainee",
            timestamps: false
        })
}