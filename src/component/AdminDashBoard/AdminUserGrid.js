import React from "react";
import { MdLogout,MdRemoveDone,MdRecommend,MdAddAlarm,MdAccountBox,MdRequestPage,MdCalendarToday ,MdUpdate,MdList,MdPassword,MdMonetizationOn,MdTransferWithinAStation,MdPrint,MdDelete,MdApproval} from "react-icons/md";
import { useHistory } from "react-router";
import axios from "axios";



export const AdminUserGrid = () => {

    var history=useHistory()

    
const DeleteBeneficiary=(e)=>{
     
  history.push('/DeleteBeneficiary')
  
}

const DeleteDonor=(e)=>{
     
  history.push('/DeleteDonor')
  
}

const DeleteNgo=(e)=>{
     
  history.push('/DeleteNgo')
  
}

const DeleteTransaction=(e)=>{
     
  history.push('/DeleteTransaction')
  
}
const ApproveWithdrawlRequest=(e)=>{
  history.push('/ApproveWithdrawlRequest')
}
const ApprovedDonor=()=>{
  history.push('/ApprovedDonor')
}
const ApprovedNgo=()=>{
  history.push('/ApprovedNgo')
}
const ApprovedBeneficiary=()=>{
  history.push('/ApprovedBeneficiary')
}
const ApprovedDonorList=()=>{
  history.push('/ApprovedDonorList')
}
const ApprovedNgoList=()=>{
  history.push('/ApprovedNgoList')
}
const ApprovedBeneficiaryList=()=>{
  history.push('/ApprovedBeneficiaryList')
}
const NotApprovedDonorList=()=>{
  history.push('/NotApprovedDonorList')
}
const NotApprovedNgoList=()=>{
  history.push('/NotApprovedNgoList')
}
const NotApprovedBeneficiaryList=()=>{
  history.push('/NotApprovedBeneficiaryList')
}

const Logout=()=>{
  alert("Are You Sure!!")  
  axios
  .post("http://localhost:9006/logout")
  .then((response) => {
    if (response.status === 200) {
     console.log(response.data)
     
     
    }else{
      console.log(response)
    }
  }) 
  sessionStorage.removeItem("adminId")
  history.push("/home")
}
    
    

  return (
    <div className="bg-success p-1 text-dark bg-opacity-10">
      <div className="container my-3  py-3 px-3 border bg-white rounded">
        <div className="row row-cols-2  row-cols-lg-5 g-2 g-lg-3">



          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={DeleteBeneficiary}>
                  DeleteBeneficiary
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdDelete/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={DeleteDonor}>
                  DeleteDonor
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdDelete/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={DeleteNgo}>
                  DeleteNgo
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdDelete/></h2>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={DeleteTransaction}>
                  DeleteTransaction
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}}class="card-title mx-5"><MdDelete/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApproveWithdrawlRequest}>
                 WithdrawlRequest
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdApproval/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApprovedDonor}>
                 ApproveDonor
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdApproval/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApprovedNgo}>
                 ApproveNgo
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdApproval/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApprovedBeneficiary}>
                 ApprovBeneficiary
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdApproval/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-2"  type="submit" onClick={ApprovedBeneficiaryList}>
                 AcceptBeneficiaryList
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"green"}} class="card-title mx-5"><MdRecommend/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApprovedNgoList}>
                 AcceptNgoList
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"green"}} class="card-title mx-5"><MdRecommend/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={ApprovedDonorList}>
                 AcceptDonorList
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"green"}} class="card-title mx-5"><MdRecommend/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={NotApprovedDonorList}>
                 RejectDonor
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdRemoveDone/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={NotApprovedNgoList}>
                 RejectNgo
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdRemoveDone/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4"  type="submit" onClick={NotApprovedBeneficiaryList}>
                 RejectBeneficiary
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 style={{"color":"red"}} class="card-title mx-5"><MdRemoveDone/></h2>
              </div>
            </div>

          </div>
          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={Logout}>
                Logout
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdLogout/></h2>
              </div>
            </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};
