import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

class CartTotals extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal,clearCart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 text-right text-capitalize">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={()=>clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
                <span className="text-title">
                    subtotal:</span>
                <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
                <span className="text-title">
                    tax:</span>
                <strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <span className="text-title">
                    total:</span>
                <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () =>
      dispatch({ type: "CLEARCART"}),
    };
  };


export default connect(null,mapDispatchToProps)(CartTotals)