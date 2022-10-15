import { Add_To_Cart, Remove_To_Cart } from "../constants";

const initialState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, { cardData: action.data }];
    case Remove_To_Cart:
      state.pop();
      return [...state];

    default:
      return state;
  }
}
