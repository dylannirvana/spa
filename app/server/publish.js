
Meteor.publish('todos', function () {
  return Todos.find({userId: this.userId});
});


Meteor.publish('detail', function (id) {
  return Todos.find({_id: id});
});
