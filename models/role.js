module.exports = function(sequelize, DT) {
    var Role = sequelize.define('Role', {
        id: {
            autoIncremenent: true,
            type: DT.INTEGER,
            primaryKey: true,
        },
        roleName: {
            type: DT.STRING,
            allowNull: false,
        },
    })
    return Role;
}