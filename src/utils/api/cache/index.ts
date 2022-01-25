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
  const now = Date.now();
  const cacheValue = {
    createdAt: now,
    [key]: val,
  };
  localStorage.setItem(key, JSON.stringify(cacheValue));
};
