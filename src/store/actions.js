import { loginUser } from '@/api/auth';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
  async LOGIN({ commit }, userData) {
    const { data } = await loginUser(userData);
    console.log(data.token);
    commit('setToken', data.token);
    commit('setUsername', data.user.username);
    saveAuthToCookie(data.token);
    saveUserToCookie(data.user.username);
    return data;
  },
};
