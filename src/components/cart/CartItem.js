import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartItem extends Component {
    render() {
        const {id,title,img,price,total,count}=this.props.item
        return (
            <div className="row my-1 m-4 text-capitalize text-center">
                <div className="col-md-2 mx-auto">
                    <img src={img} alt="/" style={{width:"5rem",height:"5rem"}}
                    className="img-fluid"/>
                </div>
                <div className="col-md-2 mx-auto">
                    {title}
                </div>
                <div className="col-md-2 mx-auto">
                    $ {price}
                </div>
                <div className="col-md-2 mx-auto">
                    <span className="btn btn-black mx-1" onClick={()=>this.props.decrement(id)}>-</span>
                    <span className="btn btn-black mx-1" >{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>this.props.increament(id)}>+</span>
                </div>
                <div className="col-md-2 mx-auto">
                    <div className="cart-icon">
                        <i className="fas fa-trash" onClick={()=>this.props.remove(id)}></i>
                    </div>
                </div>
                <div className="col-md-2 mx-auto">
                    {total}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increament: (id) =>
        dispatch({ type: "INCREAMENT", payload: id }),
        decrement: (id) =>
        dispatch({ type: "DECREMENT", payload: id }),
        remove: (id) =>
        dispatch({ type: "REMOVE", payload: id }),
    };
  };


export default connect(null,mapDispatchToProps)(CartItem)