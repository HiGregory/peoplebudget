const router = require('express').Router();
const project = require('../models/project');

router.get('/', (req, res) => {
    res.send('/project worked!');
});

module.exports = { router, version: 1 };
