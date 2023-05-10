const seneca = require('seneca')();
const mongoOpts = { host: '127.0.0.1', port: 27017 };

seneca.use('entity');
seneca.use('mongo-store', mongoOpts);

seneca.ready(function() {
  console.log('Seneca is ready!');
});

module.exports = seneca;