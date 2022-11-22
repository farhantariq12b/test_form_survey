import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { Auth } from "../../../routes/paths";

const RegisterPage = () => {
  const { onSubmit, isSubmitting } = useForm({
    initialValues: { email: "", password: "", name: "" },
    url: "",
  });
  return (
    <>
      <form className="mb-3 mt-md-4" onSubmit={onSubmit}>
        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
        <p className=" mb-5">Please enter your login and password!</p>
        <div className="mb-3">
          <label htmlFor="email" className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label ">
            Password
          </label>
          class
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="*******"
          />
        </div>
        <div className="d-grid">
          <button
            className="btn btn-outline-dark"
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </button>
        </div>
      </form>
      <div>
        <p className="mb-0  text-center">
          Already have an account?{" "}
          <Link to={Auth.Login} className="text-primary fw-bold">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
