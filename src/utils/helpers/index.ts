import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatNumberString = (num: number, precision: number = 1) => {
  if (typeof num !== "number") return "N.A";
  if (num / 10 ** 6 >= 1)
    return (num / 10 ** 6).toFixed(precision).toString() + "M";
  else if (num / 10 ** 3 >= 1)
    return (num / 10 ** 3).toFixed(precision).toString() + "k";
  return num.toString();
};

export const getTimeFrom = (time: string) => {
  return dayjs(time).fromNow();
};

export * from "./theme";
