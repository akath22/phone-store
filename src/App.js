import React from 'react'
import {Switch,Route} from "react-router-dom"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/cart/Cart"
import Default from "./components/Default"
import {Provider} from "react-redux"
import {createStore} from "redux"
import Reducer from "./components/Reducer"
import {storeProducts,detailProduct} from "./data"
import Modal from "./components/Modal"

const initStore= {
  storeProducts:[],
  modalOpen:false,
  modalProduct: detailProduct,
  cartSubTotal:0,
  cartTax:0,
  cartTotal:0
}

const setProducts=()=>{
  let temp=[]
  storeProducts.forEach((item)=>{
    const single={...item};
    temp= [...temp,single]
  })
  initStore.storeProducts=temp
}
setProducts();
const store= createStore(Reducer,initStore);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/detail/:id" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
      </Provider>
    );
  }
}

export default App;
