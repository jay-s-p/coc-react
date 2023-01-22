import "./App.css";
import grocery from "./grocery.json";
// import grocery from "./fruits.json";
import "./temp.png";
import ProductCard from './ProductCard'
import CartItem from './CartItem'
import React, { useState } from "react";

const categories = grocery.map(item => item.category[0]).filter((item, i, arr) => arr.indexOf(item) == i)

function App() {

  const [cartItem, setCartItem] = useState({});
  const [category, setCategory] = useState("all");
  const [totalPrice, setTotalPrice] = useState(0)


  // console.log(cartItem);


  const catProducts = (category == "all") ? grocery : grocery.filter(function (item) {
    return item.category[0] == category
  });

  return (
    <div className="App container-fluid container-xl d-flex flex-column">
      <div className="d-grid" style={{ height: "10vh" }}>
        <h1 className="m-auto">Grocery shop</h1>
      </div>
      <div className="row flex-grow-1 ">

        <div className="col-lg-8" style={{ height: "90vh" }}>
          <div className="card pb-3" style={{ height: "96%" }}>
            <div className="card-body overflow-auto d-flex flex-column scrollbar-style-1">
              <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="product" placeholder="Enter Product Name" name="product" />
              </div>
              <div className="d-flex overflow-auto flex-shrink-0 gap-3 scrollbar-style-0 mt-2 mb-4">
                <input type="radio" className="btn-check" name="btn-radio" id="catItemAll" autoComplete="off" defaultChecked/>
                <label className="btn btn-outline-dark" htmlFor="catItemAll" onClick={() => setCategory("all")}>All</label>
                {
                  categories.map((item, index) => {
                    return (
                      <>
                        {/* <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group"> */}
                        <input type="radio" className="btn-check" name="btn-radio" id={"catItem" + index} autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor={"catItem" + index} onClick={() => setCategory(item)}>{item}</label>
                        {/* </div> */}
                      </>
                    )
                  })
                }
              </div>
              <div className="d-flex justify-content-evenly flex-wrap overflow-auto scrollbar-style-1">
                {
                  catProducts.map((item, index) => <ProductCard item={item} setTotalPrice={setTotalPrice} setCartItem={setCartItem} />)
                }
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4" style={{ height: "90vh" }}>
          <div className="card" style={{ height: "96%" }}>
            <div className="card-body h-100 d-flex flex-column">
              <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="customer" placeholder="Enter Customer Name" name="customer" />
              </div>

              <div class="table-responsive flex-grow-1 scrollbar-style-0 mb-3">
                <table className="table table-hover table-borderless  text-start rounded-table-row">
                  <thead>
                    <tr>
                      <th style={{ width: "60%" }}>Products</th>
                      {/* <th style={{ width: "10%" }}>Qty</th> */}
                      <th className="text-center" style={{ width: "20%" }}>Price</th>
                      <th style={{ width: "10%" }}>Sub&nbsp;Total</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {
                      Object.entries(cartItem).map((item) =>
                        <CartItem setCartItem={setCartItem} setTotalPrice={setTotalPrice} item={item[1]} />
                      )
                    }
                  </tbody>
                </table>
              </div>

              <div style={{ textAlign: "right" }}>
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                      {/* <tr>
                        <td className="text-start">Tax</td>
                        <th>00.00</th>
                      </tr> */}
                      {/* <tr>
                        <td className="text-start">Discount</td>
                        <th>00.00</th>
                      </tr>
                      <tr>
                        <td className="text-start">Shipping cost</td>
                        <th>00.00</th>
                      </tr> */}
                      <tr>
                        <td className="text-start">Total</td>
                        <th>₹{totalPrice}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button className="btn btn-outline-danger">Reset</button>
                <button className="btn btn-success mx-2">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
