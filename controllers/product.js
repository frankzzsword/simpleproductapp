var Product = require('../models/product');


exports.product_details = function(req, res, next) {
    Product.find({}, function(err, products) {
        if (err) return next(err);
        res.render('products', {products: products});
    })
}

exports.product_create_get = function(req, res, next) {
    res.render('create', {title: 'Create Product'})
}

exports.product_create_post = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/products/');
    })
};


exports.product_update_get = function(req, res, next) {
    Product.findById(req.params.id, function(err, product) {
        if (err) return next(err);
        res.render('update', {product: product});
    })

}

exports.product_update_post = function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id,{name: req.body.name, price: req.body.price}, function(err, product){
        if (err) return next(err);
        res.redirect('/products/');
    })
}
exports.product_delete = function(req, res, next) {
    Product.findByIdAndDelete(req.params.id, function(err, product) {
        if (err) return next(err);
        res.redirect('/products/');
    })
}