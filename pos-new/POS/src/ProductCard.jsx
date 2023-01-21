export default function ProductCard(props) {
    return (
        <div className="col-md-3 my-2">
            <div class="card rounded-4" onClick={() => props.setCartItem((cartItem) => {
                      if (cartItem[props.item.product_id])
                        ++cartItem[props.item.product_id]["quantity"]
                      else
                        cartItem[props.item.product_id] = {
                          "product_id": props.item.product_id,
                          "quantity": 1,
                          "product_name": props.item.product_name,
                          "price": props.item.price
                        }
                        console.log(cartItem)
                      return cartItem;
                    }
                    )}>
                <img class="card-img-top p-1 rounded-4" src={(props.item.img) ? props.item.img : "https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Title" />
                <div class="card-body py-0 pb-2 px-2">
                    <h4 class="card-title text-start mb-1">{props.item.product_name}</h4>
                    <p class="card-text text-start text-primary">${props.item.price}</p>
                </div>
            </div>
        </div >

    )
}