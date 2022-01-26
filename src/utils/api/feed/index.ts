import { axiosInstance } from "..";
import { getValue, setValue } from "../cache";

export const fetchFeeds = async <T = any>(page: number) => {
  try {
    const cacheValue = getValue("feeds");
    if (cacheValue && cacheValue.page >= page) {
      return cacheValue.feeds;
    }
    const resp = await axiosInstance.get<T>(`/photos`, {
      params: { page, per_page: 10 },
    });
    if (page <= 2) setValue("feeds", { page, feeds: resp.data });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
