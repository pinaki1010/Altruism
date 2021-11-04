import React from 'react'
import {useHistory}  from "react-router";


export const Aboutus=() => {

    var history=useHistory()

    
    const Contactus=()=>{

     history.push("/Contactus")

    }

    return (
        <div>
            


 <div class="container d-flex justify-content-center mt-5 mb-5 shadow p-3 mb-5 bg-white rounded">
 <div class="card bg-dark text-white" style={{"width":"800px"}}>
  <img src="global.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <p class="card-text"></p>
  </div>
</div>
    <div class="card p-3">
        <div class="d-flex "> <span class="mt-3 heading">About Us ?</span> </div>
        <div class="mt-4"> <span class="text">Read our <a href="#">how to guides</a> and <a href="#">optimization articles</a> for additional dirction for improving your page performance</span> </div>
        <div class="mt-3"> <span class="text">Thousands fight for their lives from fatal diseases and unforeseen medical emergencies every day. Families are often left drained of all their savings due to insufficient insurance coverage and are forced to take loans at high interest rates. Many also have to risk delaying or stopping treatment due to lack of funds.
At ImpactGuru, we believe saving lives is a service. With the help of millions of donors online, who step up to generously support friends, colleagues and strangers with contributions, we are trying to reach each and every individual across India to ensure that no life is ever lost due to lack of money.</span> </div>
        <div class="mt-4 text-left"> <button class="btn btn-primary px-3" onclick={Contactus}>Contact Us</button> </div>
    </div>
</div>
        </div>
    )
}
