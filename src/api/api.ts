import axios from "axios";

const instanceFull = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "00b8385c-3869-4d47-bd40-ee469396a009",
  },
});

const instanceBase = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

function getUsers(currentPage: number, pageSize: number) {
  return instanceFull.get(`/users/?page=${currentPage}&count=${pageSize}`);
}

function followUser(id: number) {
  return instanceFull.post(`/follow/${id}`);
}

function unfollowUser(id: number) {
  return instanceFull.delete(`/follow/${id}`);
}

function authUser() {
  return instanceFull.get("/auth/me");
}

function loginUser(email: string, password: string, rememberMe: boolean = false) {
  return instanceFull.post("/auth/login", { email, password, rememberMe });
}

function logoutUser() {
  return instanceFull.delete("/auth/login");
}

function getMessengerChats() {
  return instanceBase.get("/users");
}

function getProfile(id: string) {
  return instanceBase.get(`/profile/${id}`);
}

function getStatus(id: string) {
  return instanceBase.get(`/profile/status/${id}`);
}

function updateStatus(status: string) {
  return instanceFull.put(`/profile/status`, { status });
}

export { getUsers, followUser, unfollowUser, authUser, loginUser, logoutUser, getMessengerChats, getProfile, getStatus, updateStatus };
