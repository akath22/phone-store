import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { connect } from "react-redux";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    const cartItems = this.props.cartItems;
    const cartSubTotal = this.props.cartSubTotal;
    const cartTax = this.props.cartTax;
    const cartTotal = this.props.cartTotal;
    const history= this.props.history;
    return (
      <section>
        {cartItems.length > 0 ? (
          InsideComp(cartItems, cartSubTotal, cartTax, cartTotal,history)
        ) : (
          <EmptyCart />
        )}
      </section>
    );
  }
}

const InsideComp = (cartItems, cartSubTotal, cartTax, cartTotal,history) => {
  return (
    <React.Fragment>
      <h1 className="text-title text-center mt-5">
        Your <strong className="text-blue">Cart</strong>
      </h1>
      <CartColumns />
      <CartList cartItems={cartItems} />
      <CartTotals
        cartItems={cartItems}
        cartSubTotal={cartSubTotal}
        cartTax={cartTax}
        cartTotal={cartTotal}
        history={history}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const temp = state.storeProducts.filter((product) => product.inCart);
  return {
    cartItems: temp,
    cartSubTotal: state.cartSubTotal,
    cartTax: state.cartTax,
    cartTotal: state.cartTotal,
  };
};

export default connect(mapStateToProps)(Cart);
