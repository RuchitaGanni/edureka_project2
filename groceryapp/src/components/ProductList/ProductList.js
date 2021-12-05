import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './ProductList.css';
// import './MainBody/MainBody.css'
class ProductList extends Component {
    render() {
        return (
            <Fragment>
                {/* <input type="text" placeholder="Search essentials,groceries and more..," className="seacrhInput" /> */}
                <div className="row" id="items_div">
                    <div className=" col-sm-3 col-md-3">

                        <div className="thumbnail">
                            <div id="offer_divs">
                                Get 10% off
                                <span className="glyphicon glyphicon-asterisk" id="offer_txt"></span>
                            </div>
                            <img src="/images/apples.jpg" alt="Apples" id="th_img" />
                            <div className="caption_div">
                                <span className="head_txt">Apples 1 kg</span>
                            </div>
                            <div className="mrp_div">
                                <span className="mrp_txt">&#8377; 150.00</span>
                            </div>
                            <div className="cart_div">
                                <button className="btn btn-primary" id="cart_btn">
                                    <span>Add</span>
                                    <span className="glyphicon glyphicon-plus-sign"></span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3">

                        <div className="thumbnail">
                            <div id="offer_divs">
                                Get 12% off
                                <span className="glyphicon glyphicon-asterisk" id="offer_txt"></span>
                            </div>
                            <img src="/images/strawberry.jpg" alt="Strawberry" id="th_img" />
                            <div className="caption_div">
                                <span className="head_txt">Strawberry 1 kg</span>
                            </div>
                            <div className="mrp_div">
                                <span className="mrp_txt">&#8377; 250.00</span>
                            </div>
                            <div className="cart_div">
                                <button className="btn btn-primary" id="cart_btn">
                                    <span>Add</span>
                                    <span className="glyphicon glyphicon-plus-sign"></span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3">

                        <div className="thumbnail">
                            <div id="offer_divs">
                                Get 8% off
                                <span className="glyphicon glyphicon-asterisk" id="offer_txt"></span>
                            </div>
                            <img src="/images/sugar.png" alt="Sugar" id="th_img" />
                            <div className="caption_div">
                                <span className="head_txt">Sugar 1 kg</span>
                            </div>
                            <div className="mrp_div">
                                <span className="mrp_txt">&#8377; 90.00</span>
                            </div>
                            <div className="cart_div">
                                <button className="btn btn-primary" id="cart_btn">
                                    <span>Add</span>
                                    <span className="glyphicon glyphicon-plus-sign"></span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3">

                        <div className="thumbnail">
                            <div id="offer_divs">
                                Get 8% off
                                <span className="glyphicon glyphicon-asterisk" id="offer_txt"></span>
                            </div>
                            <img src="/images/pearssoap.png" alt="Sugar" id="th_img" />
                            <div className="caption_div">
                                <span className="head_txt">Pears Pure & Gentle Saop</span>
                            </div>
                            <div className="mrp_div">
                                <span className="mrp_txt">&#8377; 65.00</span>
                            </div>
                            <div className="cart_div">
                                <button className="btn btn-primary" id="cart_btn">
                                    <span>Add</span>
                                    <span className="glyphicon glyphicon-plus-sign"></span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default ProductList;