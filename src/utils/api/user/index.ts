import { axiosInstance } from "..";
import { clearCache, getValue, setUserValue } from "../cache";

export const fetchUserDetails = async <T = any>(username: string) => {
  try {
    const cacheValue = getValue("user", "user");
    if (cacheValue && (!username || cacheValue.username === username)) {
      return cacheValue;
    }
    clearCache("user");
    const resp = await axiosInstance.get<T>(`/users/${username}`);
    console.log(resp.data, "User");
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
    if (
      cacheValue &&
      (!username || cacheValue.user.username === username) &&
      cacheValue.page >= page
    ) {
      return { photos: cacheValue.photos, page: cacheValue.page };
    }
    if (cacheValue.user.username !== username) clearCache("user");

    const resp = await axiosInstance.get<T>(`/users/${username}/photos`, {
      params: { page, per_page: perPage },
    });
    if (page <= 2) setUserValue({ page, photos: resp.data });
    return { photos: resp.data, page };
  } catch (error) {
    throw error;
  }
};
