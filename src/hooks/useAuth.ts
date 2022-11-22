import { useNavigate } from "react-router-dom";
import { logout as storeLogout } from "store/slices/auth";
import { useAppDispatch } from "./useStore";
import { Auth } from "routes/paths";
import { api } from "utils/apis";
import { logout } from "utils/apis/endpoints/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    await api.get(logout);
    dispatch(storeLogout());
    navigate(Auth.Login);
  };

  return {
    onLogout,
  };
};
