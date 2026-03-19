export function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const middle = Math.floor(arr.length / 2);
	const leftArray = mergeSort(arr.slice(0, middle));
	const rightArray = mergeSort(arr.slice(middle));

	const result = [];
	let i = 0;
	let j = 0;

	while (i < leftArray.length && j < rightArray.length) {
		if (leftArray[i] < rightArray[j]) {
			result.push(leftArray[i]);
			i++;
		} else {
			result.push(rightArray[j]);
			j++;
		}
	}

	return result.concat(leftArray.slice(i)).concat(rightArray.slice(j));
}
