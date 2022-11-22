import { useLocation } from "react-router-dom";
import { getPageTitleFromUrl } from "utils/get-page-title-from-url";

export const usePageTitle = () => {
  const { pathname } = useLocation();
  const splitted = pathname.split("/");

  return getPageTitleFromUrl(splitted[splitted.length - 1]);
};
