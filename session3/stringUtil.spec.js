var stringUtil = require('./stringUtil.js');

describe('should repeat', function() {
    it('should return true', function() {
        // assert true
        expect(true).toBe(true);

        // assert true
        expect(true).toBeTruthy();

        // string matching
        expect('foo bar').toMatch(/bar/);

        // inspect array
        expect(['apple', 'orange', 'pears']).toContain('apple');
    });

    it('repeat strings', function() {
        expect(stringUtil.repeat('abc', 2)).toEqual('abcabc');
        expect(stringUtil.repeat('1.1', 3)).toEqual('1.11.11.1');
        expect(stringUtil.repeat('abc', 0)).toEqual('');
        expect(stringUtil.repeat('abc', -1)).toEqual('');
    });

    it('exercise startsWith', function() {
        expect( stringUtil.startsWith( 'abc', 'ab' ) ).toBe(true);
    });
});
