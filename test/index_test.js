const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => { 
            // (Setup) Define expected output
            const expected = 'cock-a-doodle-doo!';

            // (Exercise) Call Rooster.announceDawn and store result in variable
            const result = Rooster.announceDawn();

            // (Verify) Use an assert method to compare actual and expected result
            assert.equal(result, expected);
        });
    });
});