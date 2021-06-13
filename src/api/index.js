import axios from "axios";

export const getBaseURL = () => {
  return process.env.NODE_ENV === "development"
    ? //? "http://localhost:3001"
      "https://api.devsanctum.net"
    : "https://api.devsanctum.net";
};
const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export const like = async ({ rid }) => {
  try {
    const data = await axiosInstance.post("/user/like", { rid });
    console.log(data);
    return data;
  } catch (e) {
    console.error(e.response);

    return { error: e.response.data };
  }
};

export const logout = async () => {
  try {
    const data = await axiosInstance.get("/auth/logout");
    console.log("data", data);
  } catch (e) {
    console.error(e);

    return { error: e };
  }
};
