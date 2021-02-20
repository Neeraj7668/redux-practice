import { Add_To_Cart, Remove_To_Cart } from "../constants";
export const addToCart = (data) => {
  // console.warn("action", data);
  return {
    type: Add_To_Cart,
    data: data,
  };
};

export const removeToCart = () => {
  console.warn("remove");
  return {
    type: Remove_To_Cart,
  };
};
