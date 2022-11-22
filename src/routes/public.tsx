import { useAppSelector } from "hooks/useStore";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { IRoutes } from "../interface/route";
import { Login } from "../pages/auth";

export const PublicRoutes: IRoutes[] = [
  {
    path: "/auth/login",
    component: <Login />,
  },
  // {
  //   path: "/auth/register",
  //   component: <Register />,
  // },
];

export const PublicRoute = ({
  children,
}: {
  children?: ReactNode;
}): ReactElement => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem("token");

  if (isLoggedIn || token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
