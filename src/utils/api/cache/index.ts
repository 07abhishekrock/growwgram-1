const MINS = 60000;

type cacheKey = "feeds" | "user";

export const getValue = (key: cacheKey, val: string | null = null) => {
  const valueString = localStorage.getItem(key);
  if (valueString) {
    const value = JSON.parse(valueString);
    if (Date.now() - value.createdAt > 5 * MINS) {
      localStorage.removeItem(key);
      return null;
    }
    return val ? value[val] : value;
  }
  return null;
};

export const setFeedValue = (val: any) => {
  const currentCacheStr = localStorage.getItem("feeds");
  let newCacheValue;
  if (currentCacheStr) {
    const currentCacheValue = JSON.parse(currentCacheStr);
    newCacheValue = {
      ...currentCacheValue,
      feeds: [...currentCacheValue.feeds, ...val.feeds],
      page: val.page,
    };
  } else {
    const now = Date.now();
    newCacheValue = {
      createdAt: now,
      feeds: val.feeds,
      page: val.page,
    };
  }
  localStorage.setItem("feeds", JSON.stringify(newCacheValue));
};

export const setUserValue = (val: any) => {
  const currentCacheStr = localStorage.getItem("user");
  let newCacheValue;
  if (currentCacheStr) {
    const currentCacheValue = JSON.parse(currentCacheStr);
    const newPhotos = currentCacheValue.photos
      ? [...currentCacheValue.photos, ...val.photos]
      : [...val.photos];
    newCacheValue = {
      ...currentCacheValue,
      photos: newPhotos,
      page: val.page,
    };
  } else {
    const now = Date.now();
    newCacheValue = {
      createdAt: now,
      user: val.user,
      page: val.page,
    };
  }
  localStorage.setItem("user", JSON.stringify(newCacheValue));
};
