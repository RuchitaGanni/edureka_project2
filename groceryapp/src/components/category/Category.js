import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Category.css';
class Category extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-1 col-md-2 cat">
                        <Link to="/product" >
                            <div className="thumbnail">
                                <img src="/images/rice.jpg" alt="Rice" id="shc_img" />
                                <div className="caption_div">
                                    <span className="shchead_txt">Rice</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-2 col-md-2 cat">
                        <div className="thumbnail">
                            <img src="/images/cleaning.jpg" alt="Cleaning  Household" id="shc_img" />
                            <div className="caption_div">
                                <span className="shchead_txt">Cleaning  Household</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-2 col-md-2 cat">
                        <div className="thumbnail">
                            <img src="/images/Beverages.jpg" alt="Beverages" id="shc_img" />
                            <div className="caption_div">
                                <span className="shchead_txt">Beverages</span>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-2 col-md-2 cat">
                        <div className="thumbnail">
                            <img src="/images/snacks.jpg" alt="Snacks" id="shc_img" />
                            <div className="caption_div">
                                <span className="shchead_txt">Snacks</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-2 col-md-2 cat">
                        <div className="thumbnail">
                            <img src="/images/oils.jpg" alt="Oils" id="shc_img" />
                            <div className="caption_div">
                                <span className="shchead_txt">Oils</span>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment >
        )
    }
}

export default Category;