import axios from "axios";

const allProductUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;
export const getAllProduct = () => {
    return axios.get(allProductUrl);
};