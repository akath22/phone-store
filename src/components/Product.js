import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { addToCart } = this.props;
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5">
            <Link to={`/detail/${id}`}>
              <img src={img} alt="/" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart();
              }}
            >
              {inCart ? (
                <p className="mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="cart-footer d-flex">
            <p className="mr-auto pl-4">{title}</p>
            <h5 className="text-blue font-italic ml-auto pr-4">$ {price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () =>
      dispatch({ type: "ADDTOCART", payload: { id: ownProps.product.id } }),
  };
};

export default connect(null, mapDispatchToProps)(Product);
