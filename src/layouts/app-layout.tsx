import { usePageTitle } from "hooks/usePageTitle";
import Page404 from "pages/404";
import { Route, Routes } from "react-router-dom";
import { Container, Card, CardBody, CardTitle } from "reactstrap";
import { Home } from "../pages";
import { PrivateRoutes, ProtectedRoute } from "../routes/private";
import { AppNavbar } from "./navbar";

export const AppLayout = () => {
  const title = usePageTitle();
  return (
    <>
      <AppNavbar />
      <Container className="mt-2">
        <Card className="p-4">
          <CardTitle>{title}</CardTitle>
          <hr />
          <CardBody>{generateRoutes()}</CardBody>
        </Card>
      </Container>
    </>
  );
};

const generateRoutes = () => (
  <Routes>
    <Route
      path="/"
      index
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    {PrivateRoutes.map(({ path, component, children }) => (
      <Route
        path={path}
        element={
          children?.length ? undefined : (
            <ProtectedRoute>{component}</ProtectedRoute>
          )
        }
        key={path}
      >
        {children?.map?.(({ index, path: nested, component: child }) => (
          <Route
            index={index}
            path={`${path}${nested}`}
            element={<ProtectedRoute>{child}</ProtectedRoute>}
            key={path}
          />
        ))}
        index
      </Route>
    ))}
    <Route path="*" element={<Page404 />} />
  </Routes>
);
