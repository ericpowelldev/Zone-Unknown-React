module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Message", {
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }}, 
        {
            timestamps: false
        });
        
    return Messages;
};