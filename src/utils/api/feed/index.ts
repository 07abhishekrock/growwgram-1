import { axiosInstance } from "..";
import { clearCache, getValue, setFeedValue } from "../cache";

export const fetchFeeds = async <T = any>(
  page: number,
  hardRefresh?: boolean | undefined
): Promise<{ feeds: T; page: number }> => {
  try {
    const cacheValue = getValue("feeds");

    if (!hardRefresh && cacheValue && cacheValue.page >= page) {
      return cacheValue;
    }
    const resp = await axiosInstance.get<T>(`/photos`, {
      params: { page, per_page: 10 },
    });
    if (hardRefresh) clearCache("feeds");

    if (page <= 2) setFeedValue({ page, feeds: resp.data });
    return { feeds: resp.data, page };
  } catch (error) {
    throw error;
  }
};
