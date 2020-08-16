const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const userfollow = DB.define(
    'userFollow',
    {
        followedUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        followingUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {}
);

module.exports = userfollow;
