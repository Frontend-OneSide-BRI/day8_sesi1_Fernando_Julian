import api from "../helper/api";

const getUser = async (params = "") => {
  const res = await api.get(`users?${params}`);
  return res;
};

export default getUser;
