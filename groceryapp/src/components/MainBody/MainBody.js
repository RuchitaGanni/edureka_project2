import React, { Component, Fragment } from 'react';
import './MainBody.css';
import Category from '../category/Category';
import ProductList from '../ProductList/ProductList'
import JSON from '../category.json'
class MainBody extends Component {

    constructor(){
        super()

        this.state={
            ct:JSON
        }
    }

    render() {
        return (
            <Fragment >
                <div className="container" id="main-body-container">
                    {/* <div className="row" >
                        <div className="col-sm-3 col-md-5" id="serachBox"> */}
                    <input type="text" placeholder="Search essentials,groceries and more..," className="seacrhInput" />
                    {/* </div>
                    </div> */}
                    <hr/>
                    <Category cats={this.state.ct}/>
                    {/* <ProductList/> */}
                </div>
            </Fragment>
        )
    }
}
export default MainBody;