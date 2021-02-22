import { Add_To_Cart, Remove_To_Cart, Form_Input } from "../constants";
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

export const formInput = (data) => {
  return {
    type: Form_Input,
    data: data,
  };
};
