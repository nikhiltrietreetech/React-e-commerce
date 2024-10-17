const express = require('express');
const router = express.Router();
const Product = require('./models/Product');


router.get('/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


router.get('/:category/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
