import assert from 'assert';
import CheckDupli from '../../lib/CheckDupli';

describe('CheckDupli', () => {
	it('should return true', () => {
		const arr = [{ id: 0, name: 'todo' }];
		const input = 'todo';
		assert.equal(CheckDupli(input, arr), true);
	});
});
