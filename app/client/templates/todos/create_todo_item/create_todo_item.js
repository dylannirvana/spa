/*****************************************************************************/
/* CreateTodoItem: Event Handlers */
/*****************************************************************************/
Template.CreateTodoItem.events({
  'submit form': function(e, tmpl){
    e.preventDefault();

    var subject = tmpl.find('input').value;

    Todos.insert({
      subject   : subject,
      createdAt : new Date,
      isDone    : false,
      userId    : Meteor.userId()
    });

    tmpl.find('form').reset();
  }
});

/*****************************************************************************/
/* CreateTodoItem: Helpers */
/*****************************************************************************/
Template.CreateTodoItem.helpers({
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.onCreated(function () {
});

Template.CreateTodoItem.onRendered(function () {
});

Template.CreateTodoItem.onDestroyed(function () {
});
