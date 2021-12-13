import axios from 'axios';
import { useState, useEffect } from 'react'
// const productUrl = "https://edu-groceryapp.herokuapp.com/products?category_id";

function CartList() {

    const [carts, setCart] = useState([]);
    useEffect(() => {
        axios.get("https://edu-groceryapp.herokuapp.com/getOrders")
            .then((res) => {
                if (res.data.length >= 1) {
                    console.log(res.data,'res')
                    setCart(carts=>(res.data))
                }
            })

    }, []);


    let counter = 0;
    const increase = (pid) => {
    console.log(pid,'pid')
        setCart(carts =>
            carts.map((i) => 
            // if product matches increase else  return the same object
                i.product_id===pid?{...i,quantity:(i.quantity+1)}:i
                
            )
            
        );
        console.log(carts,'i');
        
       


    }
    const decrease = (pid) => {
        // if (counterDec >= 0) {
        //     if (props.cartItems.product_id === pid) {
        //         counter = counterDec - 1;
        //     }

        // }
    }

    return (
        <ul>
            {carts.map(item => (
                <li className="cartList"  key={item.product_name}>
                    <div className="cartItems" >
                        <div className="cartDivs">
                            <img src={item.image} alt={item.product_name} className="cartImage" />
                        </div>
                        <div className="cartDivs">
                            <div className="cartItemDesc">

                                <span className="cartItemDesc">{item.product_name}</span>
                                <br />
                                <span class="cartItemMrp">&#8377; {item.product_price}.00</span>
                                <br />
                                <span className="shchead_txt"></span>

                            </div>
                            <div className="parts2">
                                <button onClick={() => decrease(item.product_id)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                <span className="counter">{item.quantity}</span>
                                <button onClick={() => increase(item.product_id)}><i class="fa fa-plus" aria-hidden="true"></i></button>

                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>

    );

}
export default CartList;