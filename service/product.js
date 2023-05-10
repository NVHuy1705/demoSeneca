const seneca = require('../database/database');

const product = seneca.make$('product');

function create(name, price, callback) {
  product.name = name;
  product.price = price;
  product.save$(callback);
}

function read(id, callback) {
  product.load$(id, callback);
}

function update(id, name, price, callback) {
  product.load$(id, function(err, product) {
    if (err) return callback(err);
    product.name = name;
    product.price = price;
    product.save$(callback);
  });
}

function remove(id, callback) {
  product.remove$(id, callback);
}

module.exports = { create, read, update, remove };