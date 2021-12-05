import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Cart from './Cart/Cart'
import MainBody from './MainBody/MainBody';
import ProductList from './ProductList/ProductList'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={MainBody}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/product" component={ProductList}/>
                {/* <Route exact path="/post" component={Post}/>
                <Route path="/post/:topic" component={PostDetails}/>
                <Route path="/profile" component={Profile}/> */}
            {/* <Footer/> */}
        </BrowserRouter>
    )
}


export default Routing;