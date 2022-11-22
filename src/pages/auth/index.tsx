import { lazy } from "react";

const Login = lazy(() => import("./signin"));
const Register = lazy(() => import("./signup"));

export { Login, Register };
