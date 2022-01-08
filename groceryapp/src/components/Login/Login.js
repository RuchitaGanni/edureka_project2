import React, { Component, Fragment } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import './login.css'
const loginUrl = "http://localhost:5000/api/auth/login"
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

            email: '',
            message: '',
            password: '',
            message:'',
            showSuccessAlert: false

        }
        console.log(this.state)
    }
    handleSubmit = () => {
        if (!this.state.email) {
            this.setState({ showSuccessAlert: true })
            this.setState({message:'Please enter E-mail'})
        }else if(!this.state.password){
            this.setState({ showSuccessAlert: true })
            this.setState({message:'Please enter Password'})
        } else {
            fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })

                .then((res) => res.json())
                .then((data) => {
                    if (data.auth === false) {
                        this.setState({ message: data.token });
                    } else {
                        localStorage.setItem('ltk', data.token)

                        this.props.history.push('/')
                    }
                })
        }
    }
    handleSignUp = () => {
        this.props.history.push('/Signup')
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <Fragment>
                <div className="container" id="formBck">
                    {this.state.showSuccessAlert &&
                        <Alert variant="filled" severity="error"  id="alert"
                       
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        this.setState({ showSuccessAlert: false })
                                        //   setOpen(false);
                                    }}
                                >
                                    <i class="fa fa-times" style={{ color: 'black' }}></i>
                                </IconButton>
                            }

                        >
                            <span className="errorMsg">{this.state.message}</span>
                        </Alert>

                    }
                    <div className="thumbnail" >
                        <img src='/images/veggie.jpg' alt="fonrtt" />
                    </div>
                    <div className="thumbnail">
                        <h1 id="loginHd"><center>Login</center></h1>

                        <div className="form-group" id="emailInp">
                            <label>E-mail</label>
                            <input type="text" name="email" id="email" class="form-control" value={this.state.email} onChange={this.handleChange} required />

                        </div>


                        <div id="passwordGrp" >

                            <div className="form-group" id="pswdInp">
                                <label>Password</label>
                                <input type="Password" name="password" id="password" class="form-control" value={this.state.password} onChange={this.handleChange} required />
                            </div>

                            <div id="viewPswd">
                                <span className="glyphicon glyphicon-eye-open" onclick="show(1);"></span>
                            </div>
                        </div>
                        <div id="buttonsDiv">
                            <button className="btn btn-success space" onClick={this.handleSubmit} >Submit</button>
                            <button className="btn btn-success space" onClick={this.handleSignUp} >Sign Up</button>
                        </div>
                    </div>

                </div >

            </Fragment >
        )

    }
}
export default Login;