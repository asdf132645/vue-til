import axios from 'axios';

function registerUser(userData) {
  const url = 'http://localhost:3000/signup';
  //프로미스값 리턴
  return axios.post(url, userData);
}

//내보내기
export { registerUser };
