import React, { Component, Fragment } from 'react';
import './MainBody.css';
import Category from '../category/Category';

import axios from 'axios';

const categoryUrl="https://edu-groceryapp.herokuapp.com/category";
class MainBody extends Component {

    constructor(){
        super()

        this.state={
            categories:[]
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
                    <Category cats={this.state.categories}/>
                    {/* <ProductList/> */}
                </div>
            </Fragment>
        )
    }
     //api call 
    //  
    
    componentDidMount(){
        axios.get(categoryUrl)
        .then((res) => {
            console.log(res.data,'hhhhh');
            this.setState({categories:res.data})
        })
    }

}
export default MainBody;