import axios from "axios";

function getUsers(currentPage, pageSize) {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${pageSize}`, { withCredentials: true });
}

function followUser(id) {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { withCredentials: true, headers: { "API-KEY": "0261e173-fc5b-4bb7-9d2e-12b446daff16" } });
}

function unfollowUser(id) {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": "0261e173-fc5b-4bb7-9d2e-12b446daff16" } });
}

function loginUser() {
  return axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true });
}

function getMessengerChats() {
  return axios.get("https://social-network.samuraijs.com/api/1.0/users");
}

function getProfile(id) {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
}

export { getUsers, followUser, unfollowUser, loginUser, getMessengerChats, getProfile };
