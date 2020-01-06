const express = require('express')
const router = express.Router();

//Require the controllers
const product_controller = require('../controllers/product');

router.get('/', product_controller.product_details);

router.get('/create', product_controller.product_create_get);

router.post('/create', product_controller.product_create_post);

router.get('/:id/update', product_controller.product_update_get);

router.post('/:id/update', product_controller.product_update_post);

router.get('/:id/delete', product_controller.product_delete);

module.exports = router;