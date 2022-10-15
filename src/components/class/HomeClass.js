import React, { Component } from 'react'
import { connect } from 'react-redux';
import Mobile from "../../images/mobile.png";
import { removeToCart, addToCart } from '../../service/action/action';


const mapStateToProps = (state) => ({
    data: state,
});



const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)), //import action components
    removeToCartHandler: (data) => dispatch(removeToCart(data)),
});




class HomeClass extends Component {
    render() {

        return (
            <div className="cart-wrapper">
                <h6>Class Component</h6>
                <div className="img-wrapper item">
                    <img src={Mobile} alt="vivo" />
                </div>
                <div className="text-wrapper item">
                    <span>Vivo</span>

                    <span> Price: Rs.10000</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        className="addBtn"
                        onClick={() =>
                            this.props.addToCartHandler({ price: 10000, name: "Vivo" })
                        }
                    >
                        Add to Cart
                    </button>
                    <button
                        className="removeBtn"
                        onClick={() => this.props.removeToCartHandler()}
                    >
                        Remove to Cart
                    </button>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);

