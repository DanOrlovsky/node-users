'use strict';
module.exports = function(sequelize, DT) {
    var Item = sequelize.define('Item', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DT.INTEGER,
        },
        parentId: DT.INTEGER,
        url: DT.STRING,
        post: DT.STRING,
    })
    return Item;
}