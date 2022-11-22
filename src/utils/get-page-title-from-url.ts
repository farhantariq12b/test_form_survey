export const getPageTitleFromUrl = (url: string) => {
  return url
    .split("-")
    .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
    .join(" ");
};
