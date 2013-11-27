jaster
======

buster.js style test suite helper for jasmine-node. because, tests can be easy to read and nicely managed.

```javascript
var suite = require('jaster');

suite('I like to test things', {
	beforeAll: function(){
		this.counter = 0;
	},
	beforeEach: function(){
		this.counter++;
	},
	'It should pass': function(){
		expect(true).toBe(true);
	},
	'It should faile': function(){
		expect(true).toBe(false);
	},
	'// It should be disabled': function(){
		expect("not to run").toBeTruthy();
	}
});
```
