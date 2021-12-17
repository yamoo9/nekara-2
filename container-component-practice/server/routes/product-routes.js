const express = require('express');
const Product = require('../model/Product');

const router = express.Router();

/* -------------------------------------------------------------------------- */

router.get('/', async (req, res, next) => {
  try {
    let products = await Product.find();
    if (!products) {
      return res.status(404).json({ message: 'Product가 없습니다.' });
    }
    res.status(200).json({ products });
  } catch (error) {
    console.error(error.message);
  }
});

/* -------------------------------------------------------------------------- */

router.post('/', async (req, res, next) => {
  const { name, description, price, imageURL, quantity, isFeatured } = req.body;

  let product = new Product({
    name,
    description,
    price,
    imageURL,
    quantity,
    isFeatured,
  });

  try {
    product = await product.save();
    if (!product) {
      return res
        .status(500)
        .json({ message: 'product 추가 과정에 문제가 발생했습니다.' });
      next();
    }
    res.status(200).json({ product });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
