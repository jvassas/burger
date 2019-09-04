var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  },
  // Delete button code
  // deleteOne: function(condition, cb) {
  //   orm.deleteOne("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;

