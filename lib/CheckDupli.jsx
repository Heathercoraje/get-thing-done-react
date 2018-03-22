const CheckDupli = (input, arr) => {
	const existing = arr.map(el => el.name);
	return existing.indexOf(input) >= 0;
};
export default CheckDupli;
