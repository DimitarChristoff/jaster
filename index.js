'use strict';

require('colors');

var mutators = [
	'beforeEach',
	'afterEach',
	'beforeAll',
	'afterAll'
], isDisabled = function(testName){
	return testName.indexOf('//') === 0;
}, cleanName = function (testName) {
	return testName.replace(/(\/\/|x)\s?/, '');
};

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
					var disabled = isDisabled(key);
					(disabled ? xit : it).call(this, key, tests[key].bind(this));
					disabled && console.log('    × '.red + 'skipped test: '.cyan + cleanName(key));
				}
				else {
					delete tests[key];
				}
			}, this);

			afterAll && afterAll.call(this);
		};
	}

	var method = (isDisabled(group)) ? xdescribe : describe;
	method(group, prepareTests(tests));
};
