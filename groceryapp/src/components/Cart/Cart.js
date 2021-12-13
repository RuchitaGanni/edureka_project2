import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css';
import CartList from './CartList';
import axios from 'axios';
const cartListUrl = "https://edu-groceryapp.herokuapp.com/getOrders";
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartss: ''
        }
        
    }

   
    render() {
        return (
            <Fragment>
                <div className="container" id="main-body-container">
                    <center>
                        <button id="checkOut" className="btn btn-primary border border-warning">
                            <sapn class="btn_txt">Proceed to check Out</sapn>
                        </button>
                    </center>


                    {/* <CartList carttems={this.state.cartss} /> */}
                    <CartList  />

                    <center>
                        <button id="checkOut" className="btn btn-primary border border-warning">
                            <sapn class="btn_txt">Proceed to check Out</sapn>
                        </button>
                    </center>
                </div>
            </Fragment >
        )
    }

    componentDidMount() {
        
        axios.get(cartListUrl)
            .then((res) => {
                if (res.data.length >= 1) {
                    this.setState({ cartss: res.data })
                }
            })
    }
}

export default Cart;