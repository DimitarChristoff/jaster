'use strict';

var suite = require('../');


suite('Should have a test group that passes ', {

	beforeAll: function(){
		console.log(Object.keys(this));
		console.log('Welcome to the suite');
	},

	beforeEach: function(){
		console.log(Object.keys(this));
		this.counter || (this.counter = 0);
		console.log('Running assertion ', ++this.counter);
	},

	'It should pass': function(){
		expect(true).toBeTruthy();
	},

	afterEach: function(){
		console.log(jasmine.getEnv());
	},

	afterAll: function(){
		console.log('Bye');
	}

});