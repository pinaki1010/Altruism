import React from 'react'

export default function TaxList(prop) {
    return (
        <tr class="table-dark">
        <td>{prop.donorID}</td>
        <td>{prop.donorName}</td>
        <td>{prop.ngoName}</td>
        <td>{prop.donorPanCardNo}</td>
        <td>{prop.donorAddress}</td>
        <td>{prop.donorCity}</td>
        <td>{prop.transactionDate}</td>
        <td>{prop.donationAmount}</td>
        </tr>

    ) 
}
