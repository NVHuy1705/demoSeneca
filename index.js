const app = require('./api');
const { connect, getDb } = require('./database/mongoDb');
const seneca = require('./service/seneca');

// Kết nối tới MongoDB
connect();

// Khởi tạo ExpressJS
const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});

// Khởi tạo SenecaJS
seneca.listen({ port: 9000 });