import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css';
import CartList from './CartList';
import CartTable from './CartTable'

import axios from 'axios';
const cartListUrl = "https://edu-groceryapp.herokuapp.com/getOrders";
const placeOrder="https://edu-groceryapp.herokuapp.com/saveOrder"
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartss: '',
            totalCost: 0,
            totalUnits: 0
        }
        console.log('here2', sessionStorage.getItem('totalCost'))
        // console.log(sessionStorage.getItem('totalCost'), 'totalCost')

        // console.log(sessionStorage.getItem('totalUnits'), 'totalUnits')
    }

    placeOrder = () => {
        console.log(sessionStorage.getItem('totalCost'), 'totalCost4',this.state.cartss)

        console.log(sessionStorage.getItem('totalUnits'), 'totalUnits');
        console.log(this.state,'this.state')

        fetch(placeOrder,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('going for payment'))
    }

    render() {
        return (
            <Fragment>
                <div className="container" id="main-body-container">
                    {/* <center>
                        <button id="checkOut" className="btn btn-primary border border-warning">
                            <span class="btn_txt">Proceed to check Out</span>
                        </button>
                    </center> */}


                    {/* <CartList carttems={this.state.cartss} /> */}
                    {/* <CartList  /> */}
                    <CartTable />
                    <div className="checkOutDiv">
                        {/* <center> */}
                            <button id="checkOut" className="btn btn-primary pull-right" onClick={this.placeOrder}>
                                <span class="btn_txt">Proceed to check Out</span>
                            </button>
                        {/* </center> */}
                    </div>
                    {/* <div className="checkOutDiv">

                        <h3>Total :&#8377; {this.state.totalCost}</h3>
                        <h3>Total Items :{sessionStorage.getItem('totalUnits')}</h3>
                       
                    </div> */}
                </div>
            </Fragment >
        )
    }

    componentDidMount() {
        console.log('here', sessionStorage.getItem('totalCost'))
        this.setState({ totalCost: sessionStorage.getItem('totalCost') })
        axios.get(cartListUrl)
            .then((res) => {
                if (res.data.length >= 1) {
                    this.setState({ cartss: res.data })
                }
            })
    }
}

export default Cart;