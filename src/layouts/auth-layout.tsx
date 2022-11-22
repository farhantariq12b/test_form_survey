import { Routes, Route } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { PublicRoute, PublicRoutes } from "../routes/public";

export const AuthLayout = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8} lg={6} sm={12}>
            <Card className="bg-white">
              <CardBody className="p-5">
                <Routes>
                  {PublicRoutes.map(({ index, path, component }) => (
                    <Route
                      index={index}
                      path={path}
                      element={<PublicRoute>{component}</PublicRoute>}
                      key={path}
                    />
                  ))}
                </Routes>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
