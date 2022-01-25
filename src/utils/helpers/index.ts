import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatNumberString = (num: number) => {
  if (num / 10 ** 6 >= 1) return (num / 10 ** 6).toFixed(1).toString() + "M";
  else if (num / 10 ** 3 >= 1)
    return (num / 10 ** 3).toFixed(1).toString() + "k";
  return num.toString();
};

export const getTimeFrom = (time: string) => {
  return dayjs(time).fromNow();
};
