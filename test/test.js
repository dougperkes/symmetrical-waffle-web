var assert = require('assert');
describe('Array', function() {
    describe("#indexOf()", function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        })
    });
});

describe('my suite', () => {
    it('my test', () => {
        //should set the time of this test to 1000 ms; instead it will fail
        //this.timeout(1000);
        assert.ok(true);
    });
});