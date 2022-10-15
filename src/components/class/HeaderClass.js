import React, { Component, PropTypes } from 'react'
import Cart from "../../images/cart.png";
import { connect } from "react-redux";

class HeaderClass extends Component {
    render() {
        return (
            <div>
                <div className="card-wrapper">
                    <img src={Cart} alt="Add to cart" />
                    <span>{this.props.data.length}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderClass);


