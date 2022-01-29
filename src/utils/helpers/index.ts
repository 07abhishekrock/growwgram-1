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

export const copyToClipboard = async (str: string) => {
  try {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      await navigator.clipboard.writeText(str);
    else {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  } catch (error) {
    console.log(error);
  }
};

export * from "./theme";
