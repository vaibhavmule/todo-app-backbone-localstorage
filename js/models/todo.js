// js/models/todo.js

var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the completed state od this todo item.
	toggle: function() {
		completed: !this.get('completed')
	}
});