import { axiosInstance } from "..";
import { getValue, setUserValue } from "../cache";

export const fetchUserDetails = async <T = any>(username: string) => {
  try {
    const cacheValue = getValue("user", "user");
    if (cacheValue && cacheValue.username === username) {
      return cacheValue;
    }
    const resp = await axiosInstance.get<T>(`/users/${username}`);
    setUserValue({ user: resp.data, page: 0 });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserPhotos = async <T = any>(
  username: string,
  page: number,
  perPage: number = 10
): Promise<{ photos: T; page: number }> => {
  try {
    const cacheValue = getValue("user");
    console.log(cacheValue, page);
    if (cacheValue && cacheValue.page >= page) {
      return { photos: cacheValue.photos, page: cacheValue.page };
    }
    const resp = await axiosInstance.get<T>(`/users/${username}/photos`, {
      params: { page, per_page: perPage },
    });
    if (page <= 2) setUserValue({ page, photos: resp.data });
    return { photos: resp.data, page };
  } catch (error) {
    throw error;
  }
};
