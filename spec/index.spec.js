'use strict';

var suite = require('../');

suite('Should have a test group that passes ', {

	beforeAll: function(){
		console.log('Welcome to the suite');
		this.counter = 0;
	},

	beforeEach: function(){
		console.log('Running assertion ', ++this.counter);
	},

	'It should pass': function(){
		expect(true).toBeTruthy();
	},

	'// It should not pass or run': function(){
		expect(true).not.toBeTruthy();
	},

	afterEach: function(){
		// console.log(jasmine.getEnv());
	},

	afterAll: function(){
		// console.log('Bye');
	}

});

suite('// disabled suite is disabled', {
	'No go!': function(){
		expect(true).toBeTruthy();
	}
});