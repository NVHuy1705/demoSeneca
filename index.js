const seneca = require('./database/database')

const product = require('./service/product');

product.create('product1', 10, function(err, product) {
  if (err) return console.error(err);
  console.log('Created product:', product);
});

product.update(1, 'product1', 20, function(err, product) {
  if (err) return console.error(err);
  console.log('Updated product:', product);
});

seneca.listen(3000, () => {
  console.log('Seneca service started on port 3000')
})