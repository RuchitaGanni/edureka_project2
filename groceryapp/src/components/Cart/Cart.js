import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css';
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 2
        }
    }

    increase = () => {
        if (this.state.counter >= 0 && this.state.counter < 5) {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    decrase = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 })
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
                    <ul>
                        <li>
                            {/* <div className="mainparts">
                                <div className="parts">
                                    <img src="/images/rice/jasmine.jpg" alt="jasmine" className="cartImage" />
                                </div>
                                <div className="parts">
                                    <div className="parts2">
                                        <center>
                                            <span className="shchead_txt">Jasmine Rice</span>
                                        </center>

                                        <center>
                                            <span class="mrp_txt">&#8377; 150.00</span>
                                        </center>
                                    </div>
                                    <div className="parts2">
                                        <button className="btn btn-primary"  >Remove</button>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                        <li className="cartList" >
                            <div className="cartItems">
                                <div className="cartDivs">
                                    <img src="/images/rice/jasmine.jpg" alt="jasmine" className="cartImage" />
                                </div>
                                <div className="cartDivs">
                                    <div className="cartItemDesc">

                                        <span className="cartItemDesc">Jasmine Rice</span>
                                        <br />
                                        <span class="cartItemMrp">&#8377; 150.00</span>
                                        <br />
                                        <span className="shchead_txt"></span>

                                    </div>
                                    <div className="parts2">
                                        <button onClick={this.decrase}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                        <span className="counter">{this.state.counter}</span>
                                        <button onClick={this.increase}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cartList" >
                            <div className="cartItems">
                                <div className="cartDivs">
                                    <img src="/images/beverages/fanta.jpg" alt="fanta" className="cartImage" />
                                </div>
                                <div className="cartDivs">
                                    <div className="cartItemDesc">

                                        <span className="cartItemDesc">Fanta</span>
                                        <br />
                                        <span class="cartItemMrp">&#8377; 40.00</span>
                                        <br />
                                        <span className="shchead_txt"></span>

                                    </div>
                                    <div className="parts2">
                                        <button onClick={this.decrase}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                        <span className="counter">{this.state.counter}</span>
                                        <button onClick={this.increase}><i class="fa fa-plus" aria-hidden="true"></i></button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cartList" >
                            <div className="cartItems">
                                <div className="cartDivs">
                                    <img src="/images/snacks/parle_g.jpg" alt="parle_g" className="cartImage" />
                                </div>
                                <div className="cartDivs">
                                    <div className="cartItemDesc">

                                        <span className="cartItemDesc">Parle Gluco Biscuits - 800 g</span>
                                        <br />
                                        <span class="cartItemMrp">&#8377; 70.00</span>
                                        <br />
                                        <span className="shchead_txt"></span>

                                    </div>
                                    <div className="parts2">
                                        <button onClick={this.decrase}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                        <span className="counter">{this.state.counter}</span>
                                        <button onClick={this.increase}><i class="fa fa-plus" aria-hidden="true"></i></button>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <center>
                        <button id="checkOut" className="btn btn-primary border border-warning">
                            <sapn class="btn_txt">Proceed to check Out</sapn>
                        </button>
                    </center>
                </div>
            </Fragment >
        )
    }
}

export default Cart;