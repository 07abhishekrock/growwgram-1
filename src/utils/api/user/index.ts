import { axiosInstance } from "..";
import { getValue, setValue } from "../cache";

export const fetchUserDetails = async <T = any>(username: string) => {
  try {
    const cacheValue = getValue("user");
    if (cacheValue) {
      return cacheValue.user;
    }
    const resp = await axiosInstance.get<T>(`/users/${username}`);
    setValue("user", { user: resp.data });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
