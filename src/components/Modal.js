import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    const modalOpen = this.props.modalOpen;
    const { img, title, price } = this.props.modalProduct;
    if (!modalOpen) {
      return null;
    } else {
      return (
        <div className="div" style={getStyle}>
          <div className="container">
            <div className="row">
              <div
                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                id="modal"
              >
                <h5>Item added to cart</h5>
                <img src={`/${img}`} className="img-fluid" alt="/" />
                <h5 className="mt-1">{title}</h5>
                <h5 className="text-muted">price : $ {price}</h5>
                <Link to="/">
                  <ButtonContainer onClick={()=>this.props.closeModal()}> Continue Shopping</ButtonContainer>
                </Link>
                <Link to="/cart">
                  <ButtonContainer cart onClick={()=>this.props.closeModal()} className="mt-1"> Go to Cart</ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const getStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.3)",
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.modalOpen,
    modalProduct: state.modalProduct,
  };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        closeModal:()=>
        dispatch({type:"CLOSEMODAL"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal);
