import "./App.css";
import grocery from "./grocery.json";
// import grocery from "./fruits.json";
import "./temp.png";
import Header from './Header'
import ProductCard from './ProductCard'
import CartItem from './CartItem'
import React, { useState } from "react";

const categories = grocery.map(item => item.category[0]).filter((item, i, arr) => arr.indexOf(item) == i)
let searchItem = ""

function App() {

  const [cartItem, setCartItem] = useState({});
  const [category, setCategory] = useState("all");
  const [totalPrice, setTotalPrice] = useState(0)


  // console.log(cartItem);

  let catProducts = (category == "all") ?
    grocery : (category.indexOf("search") != -1) ?
      grocery.filter((item) => {
        return (item.category[0].toLowerCase().indexOf(searchItem.toLowerCase()) != -1) || (item.product_name.toLowerCase().indexOf(searchItem.toLowerCase()) != -1)
      }) :
      grocery.filter((item) => item.category[0] == category);

  return (
    <>
      <Header />
      <div className="App container-fluid container-xxl d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-lg-8 pt-3 px-0 pe-3 ps-3" style={{ height: "90vh" }}>
            <div className="card bg-transparent border-0" style={{ height: "100%" }}>
              <div className="card-body overflow-auto d-flex flex-column scrollbar-style-1 rounded-3 pb-0" >
                {/* Search bar */}
                <div className=" mx-auto mb-3 mt-3" style={{ width: "100%" }}>
                  <input
                    onChange={(event) => {
                      if (event.target.value == "") {
                        document.getElementById("catItemAll").checked = true;
                        return;
                      }
                      var ele = document.getElementsByName("btn-radio");
                      // Setting all categories unselectd
                      for (var i = 0; i < ele.length; i++)
                        ele[i].checked = false

                      searchItem = event.target.value;
                      setCategory("search" + searchItem)
                    }}
                    type="text" className="form-control search-bar bg-transparent" id="product" placeholder="Enter Product Name" name="product" />

                </div>
                {/* Category bar */}
                <div className="d-flex flex-shrink-0 gap-3 " id="exp-2" style={{ height: "4em", alignItems: "center" }}>
                  {/* <div style={{ height: "50%", width: "10px", margin: "auto 0", flexShrink: 0 }}></div> */}
                  <input type="radio" className="btn-check" name="btn-radio" id="catItemAll" autoComplete="off" defaultChecked />
                  <label className="btn btn-outline-dark" htmlFor="catItemAll" onClick={() => setCategory("all")}>All</label>
                  <div style={{ height: "50%", width: "2px", background: "#aaa", margin: "auto 0", flexShrink: 0 }}></div>
                  <div className="d-flex gap-3 overflow-auto  scrollbar-style-0">
                    {
                      categories.map((item, index) => {
                        return (
                          <>
                            {/* <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group"> */}
                            <input type="radio" className="btn-check" name="btn-radio" id={"catItem" + index} autoComplete="off" />
                            <label className="btn btn-outline-dark " htmlFor={"catItem" + index} onClick={() => setCategory(item)}>{item}</label>
                            {/* </div> */}
                          </>
                        )
                      })
                    }
                  </div>
                  <div style={{ height: "50%", width: "10px", margin: "auto 0", flexShrink: 0 }}></div>
                </div>
                {/* Products */}
                <div id="exp-1" className="d-flex justify-content-evenly flex-wrap overflow-auto scrollbar-style-0 px-1 rounded-4">
                  {catProducts.map(item =>
                    <ProductCard item={item} setTotalPrice={setTotalPrice} setCartItem={setCartItem} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-3 px-0 pe-4" style={{ height: "90vh" }}>
            <div className="card rounded-4" style={{ height: "100%" }}>
              <div className="card-body h-100 d-flex flex-column">
                <div className="mb-3 mt-3">
                  <input type="text" className="form-control" id="customer" placeholder="Enter Customer Name" name="customer" />
                </div>

                <div id="exp-3" className="table-responsive flex-grow-1 scrollbar-style-0 mb-3">
                  {
                    (Object.keys(cartItem).length == 0) ?
                      <div style={{ height: "100%", overflow: "hidden" }}>
                        <img src="https://shop.millenniumbooksource.com/static/images/cart1.png" alt="Cart is empty"
                          style={{ width: "100%", height: "100%", scale: "2", objectFit: "contain" }} />
                      </div>
                      :
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
                  }
                </div>

                <div style={{ textAlign: "right" }}>
                  <div className="table-responsive">
                    <table className="table table-borderless">
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
                <div className="d-flex mb-2 mx-2">
                  <button style={{ flexGrow: "1" }} className="btn btn-outline-dark" onClick={() => window.location.reload(true)}>Reset</button>
                  <button style={{ flexGrow: "3" }} className="btn btn-success ms-3">Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
