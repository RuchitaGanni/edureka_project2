import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Table = () => {
    const history = useHistory();
    const [carts, setCart] = useState([]);
    useEffect(() => {
        axios.get("https://edu-groceryapp.herokuapp.com/getOrders")
            .then((res) => {
                if (res.data.length >= 1) {

                    setCart(carts => (res.data))

                }
            })

    }, []);


    const increase = (pid, qty) => {
        if (qty <= 5) {
            setCart(carts =>
                carts.map((i) =>
                    // if product matches increase else  return the same object
                    i.product_id === pid ? { ...i, quantity: (i.quantity + 1) } : i

                )

            );
            let prodObj = {
                product_id: pid,
                quantity: qty + 1,
                status: 0
            };
            axios.put("https://edu-groceryapp.herokuapp.com/updateStatus", prodObj)
                .then((reponse) => {

                })
        }

    }
    const decrease = (pid, qty) => {
        if (qty > 1) {


            setCart(carts =>
                carts.map((i) =>
                    // if product matches increase else  return the same object
                    i.product_id === pid ? { ...i, quantity: (i.quantity - 1) } : i

                )

            );
            let prodObj = {
                product_id: pid,
                quantity: qty - 1,
                status: 0
            };
            axios.put("https://edu-groceryapp.herokuapp.com/updateStatus", prodObj)
                .then((reponse) => {

                })
        } else {
            console.log(qty, 'qty')
            axios.delete(`https://edu-groceryapp.herokuapp.com/deleteOrder/${pid}`)
                .then((reponse) => {
                    console.log(reponse, 'deleted');
                    window.location.reload();
                    // history.push('/cart')
                })
        }

    }

    let totalUnits = 0;
    let totalCost = 0;
    let xx = carts.map(i => {
        totalCost = totalCost + (i.quantity * i.product_price);
        totalUnits = totalUnits + (i.quantity)
        sessionStorage.setItem('totalCost', totalCost);
    sessionStorage.setItem('totalUnits', totalUnits);
    })

    

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Sub Total</th>

                    </tr>
                </thead>
                <tbody>
                    {carts.map(item => (
                        <tr>
                            <td>
                                <div className="cartDivs">
                                    <img src={item.image} alt={item.product_name} className="cartImage" />
                                </div>
                            </td>
                            <td>{item.product_name}</td>
                            <td>
                                <div className="parts2">
                                    <button onClick={(pid, qty) => decrease(item.product_id, item.quantity)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                    <span className="counter">{item.quantity}</span>
                                    <button onClick={(pid, qty) => increase(item.product_id, item.quantity)}><i class="fa fa-plus" aria-hidden="true"></i></button>

                                </div>
                            </td>
                            <td>&#8377; {item.product_price}</td>
                            <td>&#8377; {item.quantity * item.product_price}</td>



                        </tr>
                        // <li className="cartList" key={item.product_name}>
                        //     <div className="cartItems" >
                        //         <div className="cartDivs">
                        //             <img src={item.image} alt={item.product_name} className="cartImage" />
                        //         </div>
                        //         <div className="cartDivs">
                        //             <div className="cartItemDesc">

                        //                 <span className="cartItemDesc">{item.product_name}</span>
                        //                 <br />
                        //                 <span class="cartItemMrp">Each: &#8377; {item.product_price}.00</span>
                        //                 <br />
                        //                 <span class="cartItemMrp">Total: &#8377; {item.product_price * item.quantity}.00</span>
                        //                 <br />
                        //                 <span className="shchead_txt"></span>

                        //             </div>
                        //             <div className="parts2">
                        //                 <button onClick={(pid, qty) => decrease(item.product_id, item.quantity)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                        //                 <span className="counter">{item.quantity}</span>
                        //                 <button onClick={(pid, qty) => increase(item.product_id, item.quantity)}><i class="fa fa-plus" aria-hidden="true"></i></button>

                        //             </div>
                        //         </div>
                        //     </div>
                        // </li>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>TOTAL ITEMS: {totalUnits}</td>
                        <td></td>
                        <td>
                       TOTAL:  &#8377; {totalCost}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Table;