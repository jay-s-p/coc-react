import "./App.css";
import grocery from "./grocery.json";
import "./temp.png";
import ProductCard from './ProductCard'
import CartItem from './CartItem'
import React, { useState } from "react";

const categories = grocery.map(item => item.category[0]).filter((item, i, arr) => arr.indexOf(item) == i)

function App() {

  let [cartItem, setCartItem] = useState([]);
  const [category, setCategory] = useState("Fruits");

  // console.log(cartItem);

  const lol = () => {
    // setCartItem((ct) => {
    //   console.log(ct);
    //   return [...ct, { "lol": "ok" }]
    // })
    // cartItem.reRender()
    setCartItem(ct=>[...ct])
    console.log(cartItem);
  }

  const catProducts = grocery.filter(function (item) {
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
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                {
                  categories.map((item, index) => {
                    return (
                      <>
                        <input type="radio" className="btn-check" name="btn-radio" id={"catItem" + index} autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor={"catItem" + index} onClick={() => setCategory(item)}>{item}</label>
                      </>
                    )
                  })
                }
              </div>
              <div className="row flex-grow-1">
                {
                  catProducts.map((item, index) =>
                    <div className="col-md-3 my-2">
                      <div class="card rounded-4"
                        // onClick={(lol) => {
                        //   let cartItemTemp = []
                        //   cartItemTemp[item.product_id] = {
                        //     "product_id": item.product_id,
                        //     "quantity": 1,
                        //     "product_name": item.product_name,
                        //     "price": item.price
                        //   }
                        //   console.log(cartItemTemp)
                        //   // setCartItem((cartItem1) => [...cartItem1, cartItemTemp])
                        //   let ctt
                        //   setCartItem((ct) => {
                        //     console.log(ct);
                        //     ctt = ct
                        //     ctt[item.product_id] = {
                        //       "product_id": item.product_id,
                        //       "quantity": 1,
                        //       "product_name": item.product_name,
                        //       "price": item.price
                        //     }
                        //     console.log(ctt);
                        //     return ctt
                        //   }
                        //   )
                        //   setCartItem((ct2)=>ct2)
                        // }

                        // onClick={(item) => {
                        //   // cartItem = [...cartItem,
                        //   cartItem.push(
                        //   {
                        //     "product_id": item.product_id,
                        //     "quantity": 1,
                        //     "product_name": item.product_name,
                        //     "price": item.price
                        //   })
                        // // ]
                        //   console.log(cartItem)
                        // }

                        // setCartItem(
                        //   (cartItem) => {
                        //     // cartItem[10] = {}
                        //     // console.log(cartItem)
                        //     // console.log("object");
                        //     return cartItem
                        //   }
                        // )

                        // onClick={() => {
                        //   setCartItem((cartItem) =>
                        //     [...cartItem,
                        //     {
                        //       "product_id": item.product_id,
                        //       "quantity": 1,
                        //       "product_name": item.product_name,
                        //       "price": item.price
                        //     }
                        //     ]
                        //   )
                        // }}

                        onClick={() => {
                          lol()
                          setCartItem((cartItem) => {
                            if (cartItem[item.product_id])
                              ++cartItem[item.product_id]["quantity"]
                            else
                              cartItem[item.product_id] = {
                                "product_id": item.product_id,
                                "quantity": 1,
                                "product_name": item.product_name,
                                "price": item.price
                              }
                            // console.log(cartItem)
                            return cartItem;
                          }
                          )
                        }}
                      >
                        <img class="card-img-top p-1 rounded-4" src={(item.img) ? item.img : "https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Title" />
                        <div class="card-body py-0 pb-2 px-2">
                          <h4 class="card-title text-start mb-1">{item.product_name}</h4>
                          <p class="card-text text-start text-primary">${item.price}</p>
                        </div>
                      </div>
                    </div >
                  )}
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
                      cartItem.map((item) =>
                        <CartItem setCartItem={setCartItem} item={item} />
                      )
                    }
                  </tbody>
                </table>
              </div>

              <div style={{ textAlign: "right" }}>
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td className="text-start">Tax</td>
                        <th>00.00</th>
                      </tr>
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
                        <th>00.00</th>
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
