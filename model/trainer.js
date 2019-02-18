module.exports = (sequelize, type) => {
    return sequelize.define("trainer", {
        trainerId: {
            field: "trainer_id",
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
        emailPhone: {
            field: "email_phone",
            type: type.STRING
        },
        activeFlag: {
            field: "active_flag",
            type: type.ENUM("0", "1"),
            defaultValue: "1"
        }
    }, {
            tableName: "trainer",
            timestamps: false
        })
}