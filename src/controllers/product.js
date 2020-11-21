const {Product, Category} = require('../db/models')

exports.findAll = (req, res) => {
    const queryParams = req.query;
    const condition = queryParams.category ? { id: queryParams.category} : null;
  
    Product.findAll({include:[{model: Category, as: 'categories', where: condition}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };