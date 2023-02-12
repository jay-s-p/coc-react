import plus from "./images/plus-dark.png"
import minus from "./images/minus-dark.png"

export default function CartItem(props) {
    // const item = props.item
    // const setCartItem = props.setCartItem
    // console.log(setCartItem)
    if (props["item"] == undefined)
        console.log("lol");
    else
        return (
            <tr>
                <td width="10px">
                    <div className="">
                        <div className="text-limit-1">
                            <abbr title={props.item.product_name}>{props.item.product_name}</abbr>
                        </div>
                        <div className="d-flex mt-1 w-75 justify-content-evenly align-items-center">
                            <div style={{ background: "#333", borderRadius: "5px" }}>
                                <img alt="lol" width="25px" height="25px" src={minus} />
                            </div>
                            <input type="text" min="{0}" max="{99}" style={{ width: "35px", textAlign: "center" }} defaultValue={props.item["quantity"]} />
                            <div style={{ background: "#333", borderRadius: "5px" }}>
                                <img alt="lol" width="25px" height="25px" src={plus} />
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">{props.item.price}</td>
                <td className="text-end">{props.item.price * props.item["quantity"]}</td>
            </tr>
        )
}