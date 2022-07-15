const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');
const role = require('./role');

/**
 * User mapping.
 * @name user
 * @memberof module:database
 * @param {String} table - database table name
 * @param {Object} fields - Object with required fields
 * @returns {Function} - User object to insert or retrieve from the database
 */
const user = DB.define('User', {
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    linkedinurl: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    address1: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address2: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    hash: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    securityQuestion: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    recoveryHash: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
// One role has many users 1:M
role.hasMany(user);
module.exports = user;
