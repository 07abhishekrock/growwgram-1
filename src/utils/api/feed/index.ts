import { axiosInstance } from "..";
import { getValue, setValue } from "../cache";

export const fetchFeeds = async <T = any>(page: number) => {
  try {
    const cacheValue = getValue("feeds");
    if (cacheValue && cacheValue.page <= page) {
      return cacheValue.feeds;
    }
    const resp = await axiosInstance.get<T>(`/photos?page=${page}`);
    setValue("feeds", { page, feeds: resp.data });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
