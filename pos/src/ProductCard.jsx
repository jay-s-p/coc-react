export default function ProductCard(props) {
  return (

    // <div className="my-2">
    <div className="card-style-1 card rounded-4 m-3 "
      onClick={() => {
        props.setCartItem((cartItem) => {
          if (cartItem["product_"+props.item.product_id])
            return cartItem;
          cartItem["product_"+props.item.product_id] = {
            "image_url": props.item.image_url,
            "product_id": props.item.product_id,
            "quantity": 1,
            "product_name": props.item.product_name,
            "price": props.item.price
          }
          props.setTotalPrice((totalPrice) => totalPrice + props.item.price)
          return cartItem;
        })
        // props.setCartItem(ct => ({ ...ct }))
        // console.log("i");
      }}>
      <img className="card-img-top p-3 rounded-4 card-img-w-h"
        alt="Title"
        src={(props.item.image_url) ? props.item.image_url : "https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
      />
      <div className="card-body py-0 pb-3 px-4">
        <h4 className="card-text text-start mb-2 fs-4" >{props.item.product_name}</h4>
        <p className="card-text text-start text-primary">₹{props.item.price}</p>
      </div>
    </div>

  )
}