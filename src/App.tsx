import AuthLayout from "./layouts/auth-layout";
import { AppLayout } from "./layouts/app-layout";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { PublicRoutes } from "./routes/public";

function App() {
  const { pathname } = useLocation();
  const isAuth = useMemo(() => {
    return !!PublicRoutes.find((item) => item.path === pathname);
  }, [pathname]);
  return (
    <>
      {isAuth ? <AuthLayout /> : null}
      {!isAuth ? <AppLayout /> : null}
    </>
  );
}

export default App;
