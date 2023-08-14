// Import the necessary modules and initialize the router
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models'); // Assuming you have imported your models

// Route to get all tags with associated products
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product, // Include the associated Product model
        through: ProductTag, // Use the join table ProductTag to establish the association
      },
    ],
  })
    .then((tags) => res.status(200).json(tags)) // Send the retrieved tags as JSON response
    .catch((err) => res.status(500).json(err)); // Handle errors with a 500 status code
});

// Route to get a specific tag by its ID
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
    include: [
      {
        model: Product, // Include the associated Product model
        through: ProductTag, // Use the join table ProductTag
      },
    ],
  })
    .then((tag) => {
      if (!tag) {
        return res.status(404).json({ message: 'Tag not found' }); // Tag not found
      }
      res.status(200).json(tag); // Send the retrieved tag as JSON response
    })
    .catch((err) => res.status(404).json(err)); // Handle errors with a 404 status code
});

// Route to create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body) // Create a new tag using the request body
    .then((tag) => res.status(200).json(tag)) // Send the created tag as JSON response
    .catch((err) => res.status(404).json(err)); // Handle errors with a 404 status code
});

// Route to update a tag by its ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
  })
    .then((tag) => res.status(200).json(tag)) // Send the updated tag as JSON response
    .catch((err) => res.status(404).json(err)); // Handle errors with a 404 status code
});

// Route to delete a tag by its ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id, // Use the ID from the request parameters
    },
  })
    .then((tag) => {
      if (!tag) {
        return res.status(404).json({ message: 'Tag not found' }); // Tag not found
      }
      res.status(200).json(tag); // Send a success message as JSON response
    })
    .catch((err) => res.status(404).json(err)); // Handle errors with a 404 status code
});

module.exports = router; // Export the router for use in other parts of the application