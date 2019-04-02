const express = require('express');
const Router = express.Router;

// require controller functions
const {
    create,
    getAll,
    getById,
    update,
    updateById,
    deletes,
    deleteById,
} = require('../controllers/movies');

// create the router
const movieRoutes = Router();

// Add handlers for each route

// GET
movieRoutes.get('/', getAll);
movieRoutes.get('/:id([0-9]+)', getById);

// POST
movieRoutes.post('/', create);

// PUT
movieRoutes.put('/', update);
movieRoutes.put('/:id', updateById);

// DELETE
movieRoutes.delete('/', deletes);
movieRoutes.delete('/:id', deleteById);

// export the router

module.exports = movieRoutes;