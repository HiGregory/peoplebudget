const router = require('express').Router();
const Project = require('../models/project');

router.get('/', async (req, res, next) => {
    let results = null;
    try {
        results = await Project.findAll();
        res.statusCode(200);
        res.send({ respond: results });
    } catch(error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
