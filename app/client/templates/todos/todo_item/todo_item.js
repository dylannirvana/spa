/*****************************************************************************/
/* TodoItem: Event Handlers */
/*****************************************************************************/
Template.TodoItem.events({
  'click [name=isDone]': function(e, tmpl) {
    var id = this._id;
    var isDone = tmpl.find('input').checked;
    Todos.update({_id: id}, {
      $set: {
        isDone: isDone
      }
    });
  }
});

/*****************************************************************************/
/* TodoItem: Helpers */
/*****************************************************************************/
Template.TodoItem.helpers({
  isDoneChecked: function() {
    return this.isDone ? 'checked' : '';
  }
});

/*****************************************************************************/
/* TodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoItem.onCreated(function () {
});

Template.TodoItem.onRendered(function () {
});

Template.TodoItem.onDestroyed(function () {
});
