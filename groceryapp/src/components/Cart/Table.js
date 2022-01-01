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

    let totalUnits = 0;
    let totalCost = 0;
    let pids=[];
    const increase = (pid, qty) => {
        if (qty < 5) {
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
        console.log(qty, 'actty1')
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

            console.log(prodObj, 'final asc qty')
        } else if (qty == 1) {
            console.log(qty, 'qty1')
            axios.delete(`https://edu-groceryapp.herokuapp.com/deleteOrder/${pid}`)
                .then((reponse) => {
                    console.log(reponse, 'deleted');
                     document.getElementById(pid).remove();
                    setCart(carts =>
                        carts.map((i) =>
                            // if product matches increase else  return the same object
                            i.product_id === pid ? { ...i, quantity: (i.quantity - 1) } : i
        
                        )
        
                    );
                    carts.map(i => {

                        totalCost = totalCost - (i.quantity * i.product_price);
                        totalUnits = totalUnits - (i.quantity)
                        sessionStorage.setItem('totalCost', totalCost);
                        sessionStorage.setItem('totalUnits', totalUnits);
                    })
                    //window.location.reload();
                    // history.push('/cart')
                })
        }
        console.log(qty, 'final desc qty')
    }


    let xx = carts.map(i => {
        pids.push(i.product_id)
        totalCost = totalCost + (i.quantity * i.product_price);
        totalUnits = totalUnits + (i.quantity)
        sessionStorage.setItem('totalCost', totalCost);
        sessionStorage.setItem('totalUnits', totalUnits);
        sessionStorage.setItem('active_pid', pids);
    })



    return (
        <fragment>
            <h3>Your Basket has {sessionStorage.getItem('totalUnits')} items</h3>
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
                            <tr key={item.product_id} id={item.product_id}>
                                <td>
                                    <div className="cartDivs">
                                        <img src={item.image} alt={item.product_name} className="cartImage" />
                                    </div>
                                </td>
                                <td>{item.product_name}</td>
                                <td>
                                    <div className="parts2">
                                        <button className="btn danger" onClick={(pid, qty) => decrease(item.product_id, item.quantity)} id="minusIcon"><i class="fa fa-minus" aria-hidden="true" ></i></button>
                                        <span className="counter">{item.quantity}</span>
                                        <button className="btn success" onClick={(pid, qty) => increase(item.product_id, item.quantity)} id="plusIcon"><i class="fa fa-plus" aria-hidden="true"></i></button>

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
        </fragment>
    );
}

export default Table;