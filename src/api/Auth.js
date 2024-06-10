import axios from "axios";
import { AUTH_BASE_URL } from "../constants";

export async function joinFetch(id, password, nickname) {
  const { data } = await axios.post(
    `https://moneyfulpublicpolicy.co.kr/register`,
    {
      id,
      password,
      nickname,
    }
  );
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
  const { data } = await axios.get("https://moneyfulpublicpolicy.co.kr/user", {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return data;
}

export async function updateAvatar(token, avatar, nickname) {
  const { data } = await axios.patch(
    `https://moneyfulpublicpolicy.co.kr/profile`,
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
