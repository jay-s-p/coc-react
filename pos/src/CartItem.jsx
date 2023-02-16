import plus from "./assets/images/plus-dark.png"
import minus from "./assets/images/minus-dark.png"
import { useState } from "react";

export default function CartItem(props) {

    // const item = props.item
    const setCartItem = props.setCartItem
    // console.log(setCartItem)
    if (props["item"] == undefined)
        console.log("lol");
    else {
        const price = props.item.price;
        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubTotal] = useState(price);
        return (
            <tr className="cart-item overflow-hidden" style={{position:"relative", zIndex:"1"}}>
                {/* <td className=" p-0">
                    <div className="cart-item-image-text">
                        <img src={props.item.image_url} />
                    </div>
                </td> */}
                <td className="" >
                    <div className="">
                        <div className="text-limit-1">
                            <abbr title={props.item.product_name}>{props.item.product_name}</abbr>
                        </div>
                        <div className="d-flex mt-1 w-75 justify-content-evenly align-items-center">
                            <div style={{ background: "#333", borderRadius: "5px" }}
                                onClick={() => {
                                    console.log(quantity - 1 + ":" + (subTotal - price));
                                    if (quantity == 1)
                                        return
                                    setQuantity(quantity - 1)
                                    setSubTotal((quantity - 1) * price)
                                    props.setTotalPrice((total) => {
                                        total = total - subTotal
                                        total = total + ((quantity - 1) * price)
                                        return total
                                    })
                                    document.getElementById("cat_item_" + props.item.product_name).value = parseInt(document.getElementById("cat_item_" + props.item.product_name).value) - 1
                                }}>
                                <img alt="lol" width="25px" height="25px" src={minus} />
                            </div>
                            <input
                                onKeyDown={(event) => {
                                    // console.clear();
                                    // console.log((event.key));
                                    // console.log((event.target.value.length));
                                    // console.log((event.key == 0));
                                    if (event.key == "-" || event.key == "e" || event.key == "." || event.key == " " || (event.target.value.length == 0 && event.key == 0)) {
                                        event.preventDefault()
                                        document.getElementById("cat_item_" + props.item.product_name).value = 1
                                        setQuantity(parseInt(document.getElementById("cat_item_" + props.item.product_name).value))
                                        setSubTotal((parseInt(document.getElementById("cat_item_" + props.item.product_name).value)) * price)
                                        props.setTotalPrice((total) => {
                                            total = total - subTotal
                                            total = total + ((parseInt(document.getElementById("cat_item_" + props.item.product_name).value)) * price)
                                            return total
                                        })
                                    }
                                }}
                                onChange={() => {
                                    if (isNaN(parseInt(document.getElementById("cat_item_" + props.item.product_name).value))) {
                                        setQuantity(1)
                                        setSubTotal(0)
                                        props.setTotalPrice((total) => {
                                            total = total - subTotal
                                            // total = total + price
                                            return total
                                        })
                                    } else {
                                        setQuantity(parseInt(document.getElementById("cat_item_" + props.item.product_name).value));
                                        setSubTotal((parseInt(document.getElementById("cat_item_" + props.item.product_name).value)) * price)
                                        props.setTotalPrice((total) => {
                                            total = total - subTotal
                                            total = total + ((parseInt(document.getElementById("cat_item_" + props.item.product_name).value)) * price)
                                            return total
                                        })
                                    }
                                }} type="number" id={"cat_item_" + props.item.product_name} style={{ width: "35px", textAlign: "center" }} defaultValue={1} />
                            <div style={{ background: "#333", borderRadius: "5px" }}

                                onClick={() => {
                                    console.log(quantity + 1 + ":" + (subTotal + price));
                                    setQuantity(quantity + 1)
                                    setSubTotal((quantity + 1) * price)
                                    props.setTotalPrice((total) => {
                                        total = total - subTotal
                                        total = total + ((quantity + 1) * price)
                                        return total
                                    })
                                    document.getElementById("cat_item_" + props.item.product_name).value = parseInt(document.getElementById("cat_item_" + props.item.product_name).value) + 1
                                }}>
                                <img alt="lol" width="25px" height="25px" src={plus} />
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">{props.item.price}</td>
                <td className="text-end">{subTotal}</td>
            </tr>

        )

    }
}