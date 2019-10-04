module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 50]
            }
        },
        hasBioScanner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hasGeoMapper: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hasLazer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hasJetpack: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hasWaterFilter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hasO2Scrubber: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        warpCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        health: {
            type: DataTypes.INTEGER,
            defaultValue: 20,
            allowNull: false
        },
        oxygen: {
            type: DataTypes.INTEGER,
            defaultValue: 10,
            allowNull: false
        },
        fuel: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        planet: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    });

    return Users;
};