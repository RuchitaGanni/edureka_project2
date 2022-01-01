import React, { Component, Fragment } from 'react';
import './Booking.css'
const orderStatusUpdate = "https://edu-groceryapp.herokuapp.com/updateOrder/"
class Booking extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr className="tr">
                                <th></th>
                                <th>Date Delivered</th>
                                <th>Order Amount</th>
                                <th>Items</th>
                                <th>Payment Mode</th>

                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

            </Fragment>
        )
    }
    componentDidMount() {
        console.log('innn')
        if (this.props.location) {
            var qparams = this.props.location.search;

            if (qparams) {
                var data = {
                    "status": qparams.split('?')[1].split('&')[0].split('=')[1],
                    "date": qparams.split('&')[2].split('=')[1],
                    "bank_status": qparams.split('&')[0].split('=')[1],
                    "bank": qparams.split('&')[3].split('=')[1]

                }
                console.log(data, 'dataaa')
                var orderId = qparams.split('&')[1].split('=')[1].split('_')[1];
                console.log(orderId,'orderId')
                fetch(`${orderStatusUpdate}${orderId}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // this.setState({ status: 'Delivered' })
                    })
            }
        }
        // axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}
export default Booking;