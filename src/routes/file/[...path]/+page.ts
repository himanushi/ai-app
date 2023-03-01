import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const { path } = params;
	return { path };
};
