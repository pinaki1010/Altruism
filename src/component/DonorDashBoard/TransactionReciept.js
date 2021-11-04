import React from 'react'

export default function TransactionReciept(prop) {
    return (
        <tr class="table-dark">
        <td>{prop.transactionID}</td>
        <td>{prop.donorID}</td>
        <td>{prop.userAccountNumber}</td>
        <td>{prop.recieverAccountNumber}</td>
        <td>{prop.transactionAmount}</td>
        <td>{prop.transactionTimestamp}</td>
        <td>{prop.transactionCategory}</td>
    </tr>

    )
}
