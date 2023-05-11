const seneca = require('seneca')();
var entities = require('seneca-entity')

seneca.use(entities)

const user1 = seneca.make$('user1')

seneca.add('role:api,path:create', function(msg, done) {
  // Tạo mới bản ghi trong MongoDB

  user1.save$(msg);
  done(null, { message: 'Created successfully' });
});

seneca.add('role:api,path:read', function(msg, done) {
  // Đọc tất cả các bản ghi từ MongoDB

  user1.list$({}, done);
  // done(null, { message: 'Read successfully' });
});

seneca.add('role:api,path:update', function(msg, done) {
  // Cập nhật bản ghi trong MongoDB

  user1.load$(msg.id, function (err, loadedUser) {
    if (err) return respond(err);
    if (!loadedUser) {
      done(null, { message: 'User not found' });
      return;
    };
    console.log(msg, loadedUser)
    loadedUser.name = msg.name || loadedUser.name;
    loadedUser.email = msg.email || loadedUser.email;
    loadedUser.save$(msg.data);

    done(null, { message: 'Updated successfully' });
  });
});

seneca.add('role:api,path:delete', function(msg, done) {
  // Xóa bản ghi trong MongoDB

  user1.remove$(msg.id, function (err) {
    if (err) return respond(err);

    done(null, { message: 'Deleted successfully' });
    return respond(null, { success: true });
  });
});

module.exports = seneca;