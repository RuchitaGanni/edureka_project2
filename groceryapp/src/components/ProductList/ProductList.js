import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './ProductList.css';
// import './MainBody/MainBody.css'
class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container" id="main-body-container">
                    {/* <div className="row">
                        <div className="col-sm-1 col-md-2 cat">
                            <Link to="" >
                            <div className="thumbnail">
                                <img src="/images/rice/Lalitha.jpg" alt="Lalitha" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Lalitha Rice 1KG </span>
                                </div>
                                <div class="mrp_div">
                                    <span class="mrp_txt">&#8377; 150.00</span>
                                </div>
                                <div class="cart_div">
                                    <button class="btn btn-primary" id="cart_btn">
                                        <span>Add</span>
                                        <span class="glyphicon glyphicon-plus-sign"></span>
                                    </button>

                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="col-sm-2 col-md-2 cat">
                            <div className="thumbnail">
                                <img src="/images/rice/Dawat.jpg" alt="Dawat" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Dawat Rice</span>
                                </div>
                                <div class="mrp_div">
                                    <span class="mrp_txt">&#8377; 100.00</span>
                                </div>
                                <div class="cart_div">
                                    <button class="btn btn-primary" id="cart_btn">
                                        <span>Add</span>
                                        <span class="glyphicon glyphicon-plus-sign"></span>
                                    </button>

                                </div>
                            </div>

                        </div>
                        <div className="col-sm-2 col-md-2 cat">
                            <div className="thumbnail">
                                <img src="/images/rice/Brown.jpg" alt="Brown Rice" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Brown Rice</span>
                                </div>
                                <div class="mrp_div">
                                    <span class="mrp_txt">&#8377; 150.00</span>
                                </div>
                                <div class="cart_div">
                                    <button class="btn btn-primary" id="cart_btn">
                                        <span>Add</span>
                                        <span class="glyphicon glyphicon-plus-sign"></span>
                                    </button>

                                </div>
                            </div>

                        </div>

                        <div className="col-sm-2 col-md-2 cat">
                            <div className="thumbnail">
                                <img src="/images/rice/koohinoor.jpg" alt="kohinoor" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Kohinoor</span>
                                </div>
                                <div class="mrp_div">
                                    <span class="mrp_txt">&#8377; 150.00</span>
                                </div>
                                <div class="cart_div">
                                    <button class="btn btn-primary" id="cart_btn">
                                        <span>Add</span>
                                        <span class="glyphicon glyphicon-plus-sign"></span>
                                    </button>

                                </div>
                            </div>

                        </div>
                        <div className="col-sm-2 col-md-2 cat">
                            <div className="thumbnail">
                                <img src="/images/rice/jasmine.jpg" alt="jasmine" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Jasmine Rice</span>
                                </div>
                                <div class="mrp_div">
                                    <span class="mrp_txt">&#8377; 150.00</span>
                                </div>
                                <div class="cart_div">
                                    <button class="btn btn-primary" id="cart_btn">
                                        <span>Add</span>
                                        <span class="glyphicon glyphicon-plus-sign"></span>
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div> */}

                    <div className="card" id="product_card">
                        <img src="/images/rice/jasmine.jpg" alt="jasmine" className="cardImage" id="product_image" />

                        <div className="caption_div">
                            <center>
                                <span className="shchead_txt">Jasmine Rice</span>
                            </center>
                        </div>
                        <div class="mrp_div">
                            <center>
                                <span class="mrp_txt">&#8377; 150.00</span>
                            </center>
                        </div>
                        <div class="cart_div">
                            <button class="btn btn-primary" id="cart_btn">
                                <span>Add</span>
                                <span class="glyphicon glyphicon-plus-sign"></span>
                            </button>

                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default ProductList;