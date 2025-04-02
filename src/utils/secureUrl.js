export const secureUrl = (url) => {
    if (typeof url !== "string") return "";
    return url.startsWith("http://")
      ? url.replace("http://", "https://")
      : url;
  };