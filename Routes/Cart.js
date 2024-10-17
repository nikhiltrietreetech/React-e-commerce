const express = require('express');
const router = express.Router();
const Product = require('./Models/Product');
const User = require('./Models/User');


router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found');

    const product = await Product.findById(productId);
    if (!product) return res.status(404).send('Product not found');

    
   
    user.cart.push({ product: productId });
    await user.save();

    res.json(user.cart);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
