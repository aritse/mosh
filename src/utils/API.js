import axios from "axios";
import config from "./Constants";
const URL = config.API_URL;

const API = {
  getUser: id => axios.get(`${URL}/api/user/${id}`, { withCredentials: true }),
  getUsers: () => { },
  loadSwipees: () => axios.get(`${URL}/api/swipe/load`, { withCredentials: true }),
  postLike: user => axios.post(`${URL}/api/swipe/like/${user.Id}`, {}, { withCredentials: true }),
  postNope: user => axios.post(`${URL}/api/swipe/nope/${user.Id}`, {}, { withCredentials: true }),
  getMatches: () => axios.get(`${URL}/api/swipe/matches`, { withCredentials: true }),
  postUndo: () => { },
  getMatchCount: () => axios.get(`${URL}/api/swipe/matchcount`, { withCredentials: true }),
  saveSettings: () => { },
  uploadImage: info => {
    return axios.post(`${URL}/api/image/upload`, info, { withCredentials: true });
  },
  updateBio: bio => {
    return axios.put(`${URL}/api/user/bio`, bio, { withCredentials: true });
  },
  singleImage: id => {
    return axios.get(`${URL}/api/image/${id}`, { withCredentials: true });
  },
  sendMessage: () => { },
  getChatMessages: () => axios.get(`${URL}/api/message/all`, { withCredentials: true }),
  receiveMessage: id => axios.get(`${URL}/api/message/receiver/${id}`, { withCredentials: true }),
  getMessage: id => axios.get(`${URL}/api/message/receiver/${id}`, { withCredentials: true }),
  receiveMatches: id => axios.get(`${URL}/api/swipe/matches`, { withCredentials: true }),
  chatSubscribe: () => { },
  bulkPost: () => { },
  login: user => {
    return axios.post(`${URL}/api/auth/login`, user, { withCredentials: true });
  },
  signup: user => {
    return axios.post(`${URL}/api/auth/signup`, user);
  },
  loggedinuser: () => {
    return axios.get(`${URL}/api/auth/loggedinuser`, { withCredentials: true });
  },
  logout: () => {
    return axios.get(`${URL}/api/auth/logout`, { withCredentials: true });
  }
};

export default API;
