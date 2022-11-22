import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { Auth } from "../routes/paths";

interface ComponentProps {
  [key: string | number]: any;
}

//new () => React.Component<any, any>
const withAuth = <T extends ComponentProps>(
  WrappedComponent: React.ComponentType
) => {
  // eslint-disable-next-line react/display-name
  return (props: Omit<T, keyof ComponentProps>): React.ReactElement | null => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const navigate = useNavigate();
      const { isLoggedIn } = useAppSelector((state) => state.auth);
      const token = localStorage.getItem("token");

      // If there is no access token we redirect to "/" page.
      if (!isLoggedIn || !token) {
        navigate(Auth.Login);
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
