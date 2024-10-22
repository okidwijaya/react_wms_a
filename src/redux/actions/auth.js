import { ACTION_STRING } from "@/redux/actions/actionString";
import { loginAuth } from "@/utils/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: loginAuth(body),
  };
};

export const logoutAction = () => {
  return {
    type: ACTION_STRING.authLogout,
  };
};


