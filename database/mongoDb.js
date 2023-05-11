const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connect() {
  try {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "demoSeneca",
      })
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err);
  }
}

function getDb() {
  return client.db();
}

module.exports = { connect, getDb };