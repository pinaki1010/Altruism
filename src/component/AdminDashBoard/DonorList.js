import React from 'react'

export default function DonorList(prop) {
    return (
        <tr class="table-dark">
    
        <td>{prop.donorName}</td>
        <td>{prop.donorEmail}</td>
        <td>{prop.donorPanCard}</td>
        <td>{prop.donorCity}</td>
        <td>{prop.donorAddress}</td>
        <td>{prop.donorPhoneNumber}</td>
       
        </tr>
    )
}
