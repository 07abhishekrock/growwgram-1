const MINS = 60000;

type cacheKey = "feeds" | "user";

export const getValue = (key: cacheKey) => {
  const valueString = localStorage.getItem(key);
  if (valueString) {
    const value = JSON.parse(valueString);
    if (Date.now() - value.createdAt > 5 * MINS) {
      localStorage.removeItem(key);
      return null;
    }
    return value[key];
  }
  return null;
};

export const setValue = (key: cacheKey, val: any) => {
  console.log(key, val);
  const currentCacheStr = localStorage.getItem(key);
  let newCacheValue;
  if (currentCacheStr) {
    const currentCacheValue = JSON.parse(currentCacheStr);
    newCacheValue = {
      ...currentCacheValue,
      [key]: [...currentCacheValue[key], ...val[key]],
      page: val.page,
    };
  } else {
    const now = Date.now();
    newCacheValue = {
      createdAt: now,
      [key]: val,
      page: val.page,
    };
  }
  localStorage.setItem(key, JSON.stringify(newCacheValue));
};
