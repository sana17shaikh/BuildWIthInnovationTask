const cart = [];
const handlecart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exists = state.find((x) => x.id === product.id);
      if (exists) {
        return state;
      } else {
        return [...state, product];
      }
    default:
      return state;
  }
};

export default handlecart;
