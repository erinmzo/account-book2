import axios from "axios";
import { AUTH_BASE_URL } from "../constants";

export async function joinFetch(id, password, nickname) {
  const { data } = await axios.post(`${AUTH_BASE_URL}/register`, {
    id,
    password,
    nickname,
  });
  return data;
}

export async function loginFetch(id, password) {
  const response = await axios.post(`${AUTH_BASE_URL}/login`, {
    id,
    password,
  });
  return response.data;
}

export async function getUserInfo(token) {
  const { data } = await axios.get(`${AUTH_BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function updateAvatar(token, avatar, nickname) {
  const { data } = await axios.patch(
    `${AUTH_BASE_URL}/profile`,
    {
      avatar,
      nickname,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
