import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../service/action/action";

const mapStateToProps = (state) => ({
  data: state,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)), //import action components
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
