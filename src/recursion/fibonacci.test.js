import { fibs } from './fibonacci.js';

test('find the fibonacci sequence for 10', () => {
	expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('find the fibonacci sequence for none', () => {
	expect(fibs()).toEqual(undefined);
});

test('find the fibonacci sequence for negative', () => {
	expect(fibs(-10)).toEqual(undefined);
});

test('find the fibonacci sequence for 0', () => {
	expect(fibs(0)).toEqual(undefined);
});

test('find the fibonacci sequence for letter', () => {
	expect(fibs('j')).toEqual(undefined);
});

test('find the fibonacci sequence for 1', () => {
	expect(fibs(1)).toEqual([0]);
});
