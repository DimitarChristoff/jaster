'use strict';

var suite = require('../');


suite('Should have a test group that passes ', {

	beforeAll: function(){
		console.log('Welcome to the suite');
	},

	beforeEach: function(){
		this.counter || (this.counter = 0);
		console.log('Running assertion ', ++this.counter);
	},

	'It should pass': function(){
		assert(true).toBeTrue();
	},

	afterEach: function(){
		console.log('Yay');
	},

	afterAll: function(){
		console.log('Bye');
	}

});