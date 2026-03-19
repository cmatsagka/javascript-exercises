export function fibs(n) {
	if (!n || n <= 0 || !Number.isInteger(n)) return undefined;
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	const sequence = fibs(n - 1);
	const nextNumber =
		sequence[sequence.length - 1] + sequence[sequence.length - 2];
	sequence.push(nextNumber);

	return sequence;
}
