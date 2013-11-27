'use strict';

var mutators = [
	'beforeEach',
	'afterEach',
	'beforeAll',
	'afterAll'
];

module.exports = function(group, tests){

	var getTests = function(){
		var afterAll,
			keys = Object.keys(this);

		if (this.beforeEach){
			beforeEach(this.beforeEach.bind(this));
		}

		if (this.afterEach){
			afterEach(this.afterEach.bind(this));
		}

		if (this.beforeAll){
			this.beforeAll.call(this);
		}

		if (this.afterAll){
			afterAll = this.afterAll;
		}

		keys.forEach(function(key){
			var method;

			if (mutators.indexOf(key) === -1){
				method = (key.indexOf('//') !== 0) ? it : xit;
				method.call(this, key, this[key]);
			}
			else {
				delete this[key];
			}
		}, this);


		if (afterAll){
			afterAll.call(this);
		}
	};

	describe(group, getTests.bind(tests));

};
