// @ts-ignore
const formatter = new Intl.RelativeTimeFormat('en', {
	localeMatcher: 'best fit',
	numeric: 'auto',
	style: 'long',
});

const DIVISIONS = [
	{ amount: 60, name: 'seconds' },
	{ amount: 60, name: 'minutes' },
	{ amount: 24, name: 'hours' },
	{ amount: 7, name: 'days' },
	{ amount: 4.34524, name: 'weeks' },
	{ amount: 12, name: 'months' },
	{ amount: Number.POSITIVE_INFINITY, name: 'years' },
];

export const formatTimeAgo = (date: Date) => {
	const now = new Date();
	let duration = (date.valueOf() - now.valueOf()) / 1000;
	let result;

	DIVISIONS.forEach(division => {
		if (Math.abs(duration) < division.amount) {
			if (!result) {
				result = formatter.format(Math.round(duration), division.name);
			}
		}
		duration /= division.amount;
	});

	return result;
};
