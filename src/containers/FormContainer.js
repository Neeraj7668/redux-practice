import Form from "../components/Form";
import { connect } from "react-redux";
import { formInput } from "../service/action/action";
const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  inputFormHandler: (data) => dispatch(formInput(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
