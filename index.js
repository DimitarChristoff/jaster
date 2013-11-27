'use strict';

var mutators = [
	'beforeEach',
	'afterEach',
	'beforeAll',
	'afterAll'
];

/**
 * @module jaster suite sugar
 * @param {string} group description
 * @param {object} tests key / value pair object
 */
module.exports = function(group, tests){
	function prepareTests(tests){
		var afterAll,
			keys = Object.keys(tests);

		return function(){
			tests.beforeEach && beforeEach(tests.beforeEach.bind(this));
			tests.afterEach && afterEach(tests.afterEach.bind(this));

			tests.beforeAll && tests.beforeAll.call(this);
			tests.afterAll && (afterAll = tests.afterAll);

			keys.forEach(function(key){
				if (mutators.indexOf(key) === -1){
					((key.indexOf('//') !== 0) ? it : xit).call(this, key, tests[key].bind(this));
				}
				else {
					delete tests[key];
				}
			}, this);

			afterAll && afterAll.call(this);
		};
	}

	var method = (group.indexOf('//') !== 0) ? describe : xdescribe;
	method(group, prepareTests(tests));
};
