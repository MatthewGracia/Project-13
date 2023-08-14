// Import the necessary modules and initialize the router
const express = require('express');
const router = express.Router();
const { Category, Product } = require('../models'); // Assuming you have imported your models

// Route to get all categories with associated products
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product], // Include the associated Product model
  })
    .then((categories) => res.json(categories)) // Send the retrieved categories as JSON response
    .catch((err) => res.status(500).json(err)); // Handle errors with a 500 status code
});

// Route to get a specific category by its ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
    include: [Product], // Include associated Product model
  })
    .then((category) => res.json(category)) // Send the retrieved category as JSON response
    .catch((err) => res.status(400).json(err)); // Handle errors with a 400 status code
});

// Route to create a new category
router.post('/', (req, res) => {
  Category.create(req.body) // Create a new category using the request body
    .then((category) => res.status(200).json(category)) // Send the created category as JSON response
    .catch((err) => res.status(400).json(err)); // Handle errors with a 400 status code
});

// Route to update a category by its ID
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
  })
    .then((category) => res.status(200).json(category)) // Send the updated category as JSON response
    .catch((err) => res.status(400).json(err)); // Handle errors with a 400 status code
});

// Route to delete a category by its ID
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
  })
    .then((category) => res.status(200).json(category)) // Send a success message as JSON response
    .catch((err) => res.status(400).json(err)); // Handle errors with a 400 status code
});

module.exports = router; // Export the router for use in other parts of the application