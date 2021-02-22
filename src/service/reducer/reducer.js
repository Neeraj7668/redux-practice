import { Add_To_Cart, Remove_To_Cart, Form_Input } from "../constants";

const initialState = {
  cardData: [],
  inputData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case Add_To_Cart:
      // console.log("reducer", action);
      return [...state, { cardData: action.data }];
    case Remove_To_Cart:
      state.pop();
      return [...state];

    case Form_Input:
      return [...state, { inputData: action.data }];

    default:
      return state;
  }
}
