const router = require('express').Router();
const Project = require('../models/project');
const {customValidator} = require("../helpers/validator");
const {ClientError} = require("../helpers/error");

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

router.put('/:id', async (req, res, next) => {
    let result = null;
    const id = req.params.id;
    const validationError = customValidator(req.body, {
        details: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const { details } = req.body;
        result = await Project.update({ details }, { where: { projectId: id } });
        if (result.length === 1 && result[0] === 0) {
            next(
                new ClientError(400, `id '${id}' doesn't exist or no changes were made.`)
            );
            return;
        }
        res.header('Location', `api/v1/project/${id}`);
        res.statusCode = 200;
        res.send({ respond: 'Project updated' });
    } catch (error) {
        next(error);
    }
});



module.exports = { router, version: 1 };
