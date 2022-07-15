const router = require('express').Router();
const Project = require('../models/project');
const {customValidator} = require("../helpers/validator");

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
            res.send({ respond: results });
        }
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        projectId: { type: 'numeric' },
        title: null,
        author: null,
        description: null,
        votes: { type: 'numeric' },
        avatar: null,
        details: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    const { projectId, title, author, description, votes, avatar, details } = req.body;
    try {
        const project = await Project.create({
            projectId,
            title,
            author,
            description,
            votes,
            avatar,
            details
        });
        res.header('Location', `api/v1/project/${project.projectId}`);
        res.statusCode = 201;
        res.send({ responsd: 'Project created' });
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
