export const parse = (prompt: string) => {
	let weight = 1;
	const result: { weight: number; word: string }[] = [];
	let word = '';
	let wordWeight: string | undefined = undefined;

	const push = () => {
		if (!(word.length === 0 || /^\s+$/.test(word))) {
			let parsedWeight = wordWeight ? parseFloat(wordWeight) : 1;
			parsedWeight = isNaN(parsedWeight) ? 1 : parsedWeight;
			const calcWeight = weight * parsedWeight;
			result.push({ weight: calcWeight, word });
		}
		word = '';
		wordWeight = undefined;
	};

	prompt.split('').forEach((char) => {
		if (char === ':') {
			wordWeight = '';
			return;
		} else if (wordWeight !== undefined && /^[0-9.]+$/.test(char)) {
			wordWeight += char;
			return;
		}

		if (/\(|\]/.test(char)) {
			weight = weight * 1.1;
			push();
		} else if (/\)|\[/.test(char)) {
			weight = weight * 0.9;
			push();
		} else if (/,/.test(char)) {
			push();
		} else if (/\s/.test(char)) {
			word += char;
		} else {
			word += char;
			word = word.trim();
		}
	});
	return result;
};
