import { lazy } from "react";
export const lazyLoad = (path: string) => {
  return lazy(() => import(`../pages/${path}.tsx`));
};