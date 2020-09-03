import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    const { addToCart } = this.props;
    let temp=0
    this.props.products.forEach(element => {
      if(`${element.id}`===this.props.match.params.id){
        temp = element.id;
      }
    });
    const { title, img, price, company, info, inCart }=this.props.products[temp-1]
    return (
      <div className="container mt-5">
        <h1
          className="text-center mt-5 pt-4"
          style={{ color: "var(--mainBlue)" }}
        >
          {title}
        </h1>
        <div className="row mt-5">
          <div className="col-md-6 mx-auto my-3">
            <img src={`/${img}`} alt="/" />
          </div>
          <div className="col-md-6 mx-auto my-3">
            <h3 className="mb-4">
              <strong>Model : {title}</strong>
            </h3>
            <h4 className="text-title text-secondary mb-0">MADE BY:</h4>
            <h4 className="text-title text-secondary mt-0 mb-4">{company}</h4>
            <h4 style={{ color: "var(--mainBlue)", fontWeight: "600" }}>
              Price : ${price}
            </h4>
            <p className="mb-0 mt-3">
              <strong>Some Info About Product :</strong>
            </p>
            <p className="text-secondary text-capitalize mt-0 lead">{info}</p>
            <Link to="/">
              <ButtonContainer> Back To Products</ButtonContainer>
            </Link>
            <ButtonContainer disabled={inCart ? true : false} cart className="ml-2"onClick={() => {
                addToCart();
              }}>
              {inCart ? "In Cart" : "Add to Cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state)=> {
  return {
      products:state.storeProducts,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () =>
      dispatch({ type: "ADDTOCART", payload: { id: ownProps.match.params.id } }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Details)