import { axiosInstance } from "..";

export const fetchFeeds = async (page: number) => {
  try {
    const resp = await axiosInstance.get(`/photos?page=${page}`);
    console.log(resp);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
