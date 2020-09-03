export default function reducer(state, action) {
  if (action.type === "ADDTOCART") {
    let tempDetail;
    const temp = state.storeProducts.map((product) => {
      if (`${product.id}` === `${action.payload.id}`) {
        product = {
          ...product,
          inCart: true,
          count: product.count + 1,
          total: (product.count+1) * product.price
        };
        tempDetail = product;
      }
      return product;
    });

    let tempSubTotal=0
    temp.forEach((product)=>{
        tempSubTotal=tempSubTotal+product.total
    })
     
    let tempcartTax=(tempSubTotal/10)
    
    return {
      ...state,
      storeProducts: temp,
      modalProduct: tempDetail,
      modalOpen: true,
      cartSubTotal:tempSubTotal,
      cartTax:tempcartTax,
      cartTotal:tempSubTotal+tempcartTax
    };
  }
  if (action.type === "CLOSEMODAL") {
    return {
      ...state,
      modalOpen: false,
    };
  }
  if (action.type === "INCREAMENT") {
    let temp = state.storeProducts.map((product) => {
      if (`${product.id}` === `${action.payload}`) {
        product = { ...product, count: product.count + 1, total: (product.count+1) * product.price };
      }
      return product;
    });

    let tempSubTotal=0
    temp.forEach((product)=>{
        tempSubTotal=tempSubTotal+product.total
    })
     
    let tempcartTax=(tempSubTotal/10)

    return {
      ...state,
      storeProducts: temp,
      cartSubTotal:tempSubTotal,
      cartTax:tempcartTax,
      cartTotal:tempSubTotal+tempcartTax
    };
  }
  if (action.type === "DECREMENT") {
    let temp = state.storeProducts.map((product) => {
      if (`${product.id}` === `${action.payload}`) {
        if (product.count > 1) {
          product = { ...product, count: product.count - 1, total: (product.count-1) * product.price };
        } else {
          product = { ...product, inCart: false, count: product.count - 1, total: (product.count-1) * product.price };
        }
      }
      return product;
    });

    let tempSubTotal=0
    temp.forEach((product)=>{
        tempSubTotal=tempSubTotal+product.total
    })
     
    let tempcartTax=(tempSubTotal/10)

    return {
      ...state,
      storeProducts: temp,
      cartSubTotal:tempSubTotal,
      cartTax:tempcartTax,
      cartTotal:tempSubTotal+tempcartTax
    };
  }

  if (action.type === "REMOVE") {
    const temp = state.storeProducts.map((product) => {
      if (`${product.id}` === `${action.payload}`) {
        product = { ...product, inCart: false,total:0,count:0 };
      }
      return product;
    });

    let tempSubTotal=0
    temp.forEach((product)=>{
        tempSubTotal=tempSubTotal+product.total
    })
     
    let tempcartTax=(tempSubTotal/10)
    
    return {
      ...state,
      storeProducts: temp,
      cartSubTotal:tempSubTotal,
      cartTax:tempcartTax,
      cartTotal:tempSubTotal+tempcartTax
    };
  }

  if (action.type === "CLEARCART") {
    const temp = state.storeProducts.map((product) => {
      product = { ...product, inCart: false,total:0,count:0 };
      return product;
    });

    let tempSubTotal=0
    temp.forEach((product)=>{
        tempSubTotal=tempSubTotal+product.total
    })

    let tempcartTax=parseFloat((tempSubTotal/10).toFixed(2))

    return {
      ...state,
      storeProducts: temp,
      cartSubTotal:tempSubTotal,
      cartTax:tempcartTax,
      cartTotal:tempSubTotal+tempcartTax
    };
  }
  return state;
}
