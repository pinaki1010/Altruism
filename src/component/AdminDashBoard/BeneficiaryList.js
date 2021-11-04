import React from 'react'

export default function BeneficiaryList(prop) {
    return (
        <tr class="table-dark">
        
            <td>{prop.beneficiaryName}</td>
            <td>{prop.beneficiaryEmailID}</td>
            <td>{prop.beneficaryPhoneNumber}</td>
            <td>{prop.category}</td>
            <td>{prop.accountNumber}</td>
            <td>{prop.ifscNumber}</td>
            <td>{prop.bankBranch}</td>
            <td>{prop.story}</td>
            <td>{prop.recievedAmount}</td>
        
        </tr>
    )
}
















