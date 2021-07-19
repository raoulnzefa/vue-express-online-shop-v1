const Model = require('../model');
const { Product } = Model;


// ES6提供了语法糖让代码简洁    
/** 
 * {
  getName: function() { return "Luke" },
  getAge: function() {return 24 }
}

等同于

{
  getName() { return "Luke" },
  getAge() {return 24 }
}

*/
const productController = {
  all(req, res) {
    Product.find({})
      .populate('manufacturer')
      .exec((err, products) => res.json(products))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Product
      .findOne({ _id: idParams })
      .populate('manufacturer')
      .exec((err, product) => res.json(product));
  },
  create(req, res) {
    const requestBody = req.body;
    const newProduct = new Product(requestBody);

    newProduct.save((err, saved) => {
      Product
        .findOne({ _id: newProduct._id })
        .populate('manufacturer')
        .exec((err, product) => res.json(product))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    const product = req.body;

    console.log('idParams', idParams);
    console.log('product', product);

    Product.updateOne({ _id: idParams }, { ...product }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Product.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

module.exports = productController;