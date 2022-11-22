import { useAppSelector } from "hooks/useStore";
import {
  Forms,
  CreateForm,
  Questions,
  CreateQuestion,
  Options,
  CreateOption,
} from "pages";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { IRoutes } from "../interface/route";
import { Auth } from "./paths";

export const PrivateRoutes: IRoutes[] = [
  {
    path: "/forms",
    component: <></>,
    children: [
      {
        path: "/",
        component: <Forms />,
      },
      {
        path: "/create-edit-form",
        component: <CreateForm />,
      },
      {
        path: "/:id/questions",
        component: <Questions />,
      },
      {
        path: "/:id/create-edit-questions",
        component: <CreateQuestion />,
      },
      {
        path: "/:id/questions/:q_id/options",
        component: <Options />,
      },
      {
        path: "/:id/questions/:q_id/create-edit-option",
        component: <CreateOption />,
      },
    ],
  },
];

export const ProtectedRoute = ({
  children,
}: {
  children?: ReactNode;
}): ReactElement => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem("token");

  if (!isLoggedIn || !token) {
    return <Navigate to={Auth.Login} replace />;
  }

  return <>{children}</>;
};
