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

    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => { 
            // (Setup) Define expected output
            const inputNumber = 5;
            const expected = '5';

            // (Exercise) Call Rooster.timeAtDawn and store result in variable
            const result = Rooster.timeAtDawn(inputNumber);

            // (Verify) Use an assert method to compare actual and expected result
            assert.strictEqual(result, expected);
        });
    });

    describe('.timeAtDawn', () => {

    });
});