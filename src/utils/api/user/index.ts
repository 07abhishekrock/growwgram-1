import { axiosInstance } from "..";
import { getValue, setUserValue } from "../cache";

export const fetchUserDetails = async <T = any>(username: string) => {
  try {
    const cacheValue = getValue("user");
    if (cacheValue) {
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
) => {
  try {
    const cacheValue = getValue("user");
    if (cacheValue && cacheValue.page >= page) {
      return cacheValue;
    }
    const resp = await axiosInstance.get<T>(`/users/${username}/photos`, {
      params: { page, per_page: perPage },
    });
    if (page <= 2) setUserValue({ page, photos: resp.data });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
