module.exports = (sequelize, type) => {
    return sequelize.define("study_material", {
        materialId: {
            field: "material_id",
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.TEXT,
        activeFlag: {
            field: "active_flag",
            type: type.ENUM("0", "1"),
            defaultValue: "1"
        }
    }, {
            tableName: "study_material",
            timestamps: false
        })
}