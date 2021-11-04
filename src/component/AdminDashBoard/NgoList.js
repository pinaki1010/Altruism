import React from 'react'

export default function NgoList(prop) {
    return (
        <tr class="table-dark">
      
      <td>{prop.name}</td>
      <td>{prop.ngoPanCardNo}</td>
      <td>{prop.pancardOwnerTrust}</td>
      <td>{prop.adharCardNo}</td>
      <td>{prop.purposeofTrust}</td>
      <td>{prop.ngoBankAccountNo}</td>
      <td>{prop.bankBranch}</td>
      <td>{prop.address}</td>
      <td>{prop.ngoStory}</td>
      <td>{prop.phoneNo}</td>

        </tr>
    )
}

















