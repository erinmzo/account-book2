import axios from "axios";
import { ACCOUNT_BASE_URL } from "../constants";
export async function getAccountData() {
  const { data } = await axios.get(`${ACCOUNT_BASE_URL}/expenses`);
  return data;
}

export async function getMontlyAccountData(month) {
  const { data } = await axios.get(
    `${ACCOUNT_BASE_URL}/expenses?month=${month}`
  );
  return data;
}

export async function getAccountDataById(id) {
  const { data } = await axios.get(`${ACCOUNT_BASE_URL}/expenses/${id}`);
  return data;
}

export async function addAccountData(newList) {
  const { data } = await axios.post(`${ACCOUNT_BASE_URL}/expenses`, newList);
  return data;
}

export async function deleteAccountData(id) {
  const { data } = await axios.delete(`${ACCOUNT_BASE_URL}/expenses/${id}`);
  return data;
}
export async function updateAccountData(id, list) {
  const { data } = await axios.patch(
    `${ACCOUNT_BASE_URL}/expenses/${id}`,
    list
  );
  return data;
}
