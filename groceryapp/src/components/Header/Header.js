import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import MainBody from '../MainBody/MainBody'
class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-default ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
                            <Link to="/" className="navbar-brand"><span className="nav_text">Grocery</span></Link>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li ><Link exact to="/" className="links">Home</Link></li>

                                <li><Link exact to="/cart" className="links">Cart</Link></li>
                                <li><Link exact to="/" className="links">Login/SignUp</Link></li>
                            </ul>
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
                {/* <MainBody /> */}
            </Fragment >
        )
    }
}

export default Header