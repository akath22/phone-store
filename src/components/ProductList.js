import React, { Component } from 'react'
import Product from "./Product"
import {connect} from "react-redux"

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 text-center mx-auto my-5 font-weight-b0ld">
                            <h1 className="text-title">Our <strong className="text-blue">Products</strong> </h1>
                        </div>
                    </div>
                    <div className="row">
                            {
                                this.props.products.map((product)=>{
                                    return <Product key={product.id} product={product}/>
                                })
                            }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps= (state)=> {
    return {
        products:state.storeProducts,
    }
}

export default connect(mapStateToProps)(ProductList);