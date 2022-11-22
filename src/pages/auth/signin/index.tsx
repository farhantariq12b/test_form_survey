import { FormInput } from "shared/form/input";
import { Link } from "react-router-dom";
import { Button, Form } from "reactstrap";
import { useForm } from "../../../hooks/useForm";
import { AuthEndPoints } from "utils/apis/endpoints";

export const LoginPage = () => {
  const { values, onChange, onSubmit, isSubmitting } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    url: AuthEndPoints.login,
    type: "Login",
    redirect: true,
    redirectUrl: "/",
  });
  return (
    <>
      <Form className="mb-3 mt-md-4" onSubmit={onSubmit}>
        <h2 className="fw-bold mb-2 text-uppercase ">Admin</h2>
        <p className=" mb-5">Please enter your login and password!</p>
        <FormInput
          type="email"
          id="email"
          name="email"
          label="Email Address"
          value={values.email}
          onChange={onChange}
          required
          placeholder="name@example.com"
          wrapperClass="mb-3"
        />
        <FormInput
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="*******"
          label="Password"
          required
          {...{
            wrapperClass: "mb-3",
          }}
        />
        <p className="small">
          <Link
            className="text-primary"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.alert("Coming Soon");
            }}
          >
            Forgot password?
          </Link>
        </p>
        <div className="d-grid">
          <Button outline color="dark" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </div>
      </Form>
      {/* <div>
        <p className="mb-0  text-center">
          Don't have an account?{" "}
          <Link to={Auth.Register} className="text-primary fw-bold">
            Sign Up
          </Link>
        </p>
      </div> */}
    </>
  );
};

export default LoginPage;
