import axios from "axios";

const userUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/users`;
export const getAllUsers = () => {
    return axios.get(userUrl);
}
