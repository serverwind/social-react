import axios from "axios";

const instanceFull = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0261e173-fc5b-4bb7-9d2e-12b446daff16"
  }
})

const instanceBase = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

function getUsers(currentPage, pageSize) {
  return instanceFull.get(`/users/?page=${currentPage}&count=${pageSize}`);
}

function followUser(id) {
  return instanceFull.post(`/follow/${id}`);
}

function unfollowUser(id) {
  return instanceFull.delete(`/follow/${id}`);
}

function loginUser() {
  return instanceFull.get("/auth/me");
}

function getMessengerChats() {
  return instanceBase.get("/users");
}

function getProfile(id) {
  return instanceBase.get(`/profile/${id}`);
}

export { getUsers, followUser, unfollowUser, loginUser, getMessengerChats, getProfile };
