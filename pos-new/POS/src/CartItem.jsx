import plus from "./images/plus-dark.png"
import minus from "./images/minus-dark.png"
import { useState } from "react";

export default function CartItem(props) {

    // const item = props.item
    // const setCartItem = props.setCartItem
    // console.log(setCartItem)
    if (props["item"] == undefined)
        console.log("lol");
    else {
        const price = props.item.price;
        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubTotal] = useState(price);
        return (
            <tr>
                <td width="10px">
                    <div className="">
                        <div className="text-limit-1">
                            <abbr title={props.item.product_name}>{props.item.product_name}</abbr>
                        </div>
                        <div className="d-flex mt-1 w-75 justify-content-evenly align-items-center">
                            <div style={{ background: "#333", borderRadius: "5px" }}
                                onClick={() => {
                                    setQuantity(quantity - 1)
                                    setSubTotal((quantity - 1) * price)
                                    document.getElementById("cat_item_" + props.item.product_name).value = parseInt(document.getElementById("cat_item_" + props.item.product_name).value) - 1
                                }}>
                                <img alt="lol" width="25px" height="25px" src={minus} />
                            </div>
                            <input onInput={() => {
                                setQuantity(document.getElementById("cat_item_" + props.item.product_name).value)
                                setSubTotal((document.getElementById("cat_item_" + props.item.product_name).value) * price)
                            }} type="text" min="{0}" max="{99}" id={"cat_item_" + props.item.product_name} style={{ width: "35px", textAlign: "center" }} defaultValue={1} />
                            <div style={{ background: "#333", borderRadius: "5px" }}

                                onClick={() => {
                                    setQuantity(quantity + 1)
                                    setSubTotal((quantity + 1) * price)
                                    document.getElementById("cat_item_" + props.item.product_name).value = parseInt(document.getElementById("cat_item_" + props.item.product_name).value) + 1
                                    // props.item.quantity = props.item.quantity + 1
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