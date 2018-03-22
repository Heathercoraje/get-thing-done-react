import assert from 'assert';
import CheckDupli from '../../lib/CheckDupli';

test('CheckDupli', () => {
	it('should return true', () => {
		const arr = [{ id: 0, name: 'todo' }];
		const input = 'todo';
		assert.equal(CheckDupli(input, arr), true);
	});
	it('should return false when given a new input', () => {
		const arr = [{ id: 1, name: 'tondo' }, { id: 1, name: 'Shopping' }];
		const input = 'Errands';
		assert.equal(CheckDupli(input, arr), false);
	});
});
