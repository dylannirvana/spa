/*****************************************************************************/
/* UsersDetail: Event Handlers */
/*****************************************************************************/
Template.UsersDetail.events({
});

/*****************************************************************************/
/* UsersDetail: Helpers */
/*****************************************************************************/
Template.UsersDetail.helpers({
  todos: function() {
    var user = this; // making the data context explicit helps other developers
    return Todos.find({userId: user._id}, {sort: {createdAt: -1}}); 
    // same as this._id but clearer
  }
});

/*****************************************************************************/
/* UsersDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersDetail.onCreated(function () {
});

Template.UsersDetail.onRendered(function () {
});

Template.UsersDetail.onDestroyed(function () {
});
