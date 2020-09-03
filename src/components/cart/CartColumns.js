import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-lg-block">
                <div className="row m-4">
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">name of product</p>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">quantity</p>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">remove</p>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        )
    }
}
