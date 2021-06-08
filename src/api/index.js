import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
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
