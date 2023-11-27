import type { PageServerLoad } from './$types';
import { fetchAnime } from '../utils/fetchAnime';

export const load: PageServerLoad = async () => {
	const anime = await fetchAnime();

	return { anime };
};
