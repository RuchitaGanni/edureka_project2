import React from 'react';
const BookingTable = (props) => {

    const renderMeal = ({ finalOrder }) => {
        console.log('finalOrder', finalOrder.length)
        if (finalOrder) {
            if (finalOrder.length > 0) {
                console.log('finalOrder2', finalOrder.length)

                return finalOrder.map((item) => {
                    return (
                        <tr>
                            <td>

                            </td>
                            <td>
                            {item.date}
                            </td>
                            <td>
                                {item.totalCost}
                            </td>
                            <td>
                                {item.bank_status}
                            </td>
                            <td>
                            <i class="fa fa-money" aria-hidden="true"></i>
                            </td>
                        </tr>
                    )
                })
            }
        } else {
            return (
                <>
                    <tr>
                        <td>jjjj</td>
                    </tr>
                </>
            )
        }
    }

    return (
        <>
            {/* <tbody> */}
            {renderMeal(props)}
            {/* </tbody> */}
        </>
    )
}

export default BookingTable;