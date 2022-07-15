const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const project = DB.define('project', {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    votes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    details: {
        type: DataTypes.STRING(300),
        allowNull: true
    }
});
module.exports = project;
