import { getAuthFromCookie } from '@/utils/cookies';

export default {
	ppo: 'ss',
	token: getAuthFromCookie() || '',
};
