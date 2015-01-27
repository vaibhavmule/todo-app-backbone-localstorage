// js/collections/todos.js

var app = app || {}

var TodoList = Backbone.Collection.extend({

	// Model from /models/todo.js
	model: app.Todo,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	completed: function() {
		return this.filter(function( todo ) {
			return todo.get('completed');
		});
	},

	// remaining
	remaining: function() {
		return this.without.apply( this, this.completed() );
	},

	nextOrder: function( todo ) {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order');
	}
});

// global collections of ***todos***

app.Todos = new TodoList();