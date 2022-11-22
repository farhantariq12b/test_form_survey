import { ReactElement, ReactNode } from "react";

export interface IRoutes {
  name?: string;
  component: ReactElement | ReactNode;
  path: string;
  index?: boolean;
  children?: IRoutes[];
}
