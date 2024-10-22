import axios from "axios";

const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/login`;
export const loginAuth = (body) => {
  return axios.post(loginUrl, body);
};

const registerUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/register`;
export const registerAuth = (body) => {
  return axios.post(registerUrl, body);
};

// export const logoutAuth = (token) => {
//   const URLlogout = `${process.env.REACT_APP_HOST}/auth/logout`;
//   return axios.delete(URLlogout, {
//     headers: {
//       "x-access-token": token,
//     },
//   });
// };
