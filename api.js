const express = require('express');
const seneca = require('./service/seneca');
const app = express();

app.use(express.json());

app.post('/api/create', function(req, res) {
  const data = req.body;
  seneca.act('role:api,path:create', data, function(err, result) {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.get('/api/read', function(req, res) {
  seneca.act('role:api,path:read', function(err, result) {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.put('/api/update/:id', function(req, res) {
  const id = req.params.id;
  const data = req.body;
  seneca.act('role:api,path:update', { id, data }, function(err, result) {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.delete('/api/delete/:id', function(req, res) {
  const id = req.params.id;
  seneca.act('role:api,path:delete', { id }, function(err, result) {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

module.exports = app;