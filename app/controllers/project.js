const router = require('express').Router();
const Project = require('../models/project');

router.get('/', async (req, res, next) => {
    let results = null;
    try {
        results = await Project.findAll();
        res.statusCode = 200;
        res.send({ respond: results });
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    let results = null;
    const id = req.params.id;
    try {
        results = await Project.findOne({ where: { id: id } });
        if (results === null) {
            res.statusCode = 404;
            res.send('Not found project with id: ' + id);
        } else {
            res.statusCode = 200;
            res.send({ respond: results })
        }
    } catch (error) {
        next(error);
    }
});


module.exports = { router, version: 1 };
