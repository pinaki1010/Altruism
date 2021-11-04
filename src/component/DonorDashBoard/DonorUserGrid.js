import React from "react";
import { MdLogout,MdAddAlarm,MdAccountBox,MdRequestPage,MdCalendarToday ,MdUpdate,MdList,MdPassword,MdMonetizationOn,MdTransferWithinAStation,MdPrint} from "react-icons/md";
import { useHistory } from "react-router";
import axios from "axios";


export const DonorUserGrid = () => {

    var history=useHistory()

    const DonorUserProfileView=(e)=>{
     
        history.push('/DonorUserProfileView')
        
    }

    const Donate=()=>{
        history.push('/Donate')
    }

    const TransactionList=()=>{
        history.push('/TransactionList') 
    }

    const TaxReport=()=>{
        history.push('/TaxReport') 
    }

    const UpdateDonorUser=()=>{
        history.push('/UpdateDonorUser') 
    }

    const ResetDonorUserPassword=()=>{
        history.push('/ResetDonorUserPassword') 
    }

    
    const Logout=()=>{
      alert("Are You Sure!!")  
      axios
      .post("http://localhost:9008/logout")
      .then((response) => {
        if (response.status === 200) {
         console.log(response.data)
         
         
        }else{
          console.log(response)
        }
      }) 
      sessionStorage.removeItem("donorId")
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
                <button class="btn btn-primary mx-4" value={1234} type="submit" onClick={DonorUserProfileView}>
                  Profile
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdAccountBox/></h2>

              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={Donate}>
                 Donate
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdMonetizationOn/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={TransactionList}>
                 Transactions
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdTransferWithinAStation/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={TaxReport}>
                 TaxReport
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdPrint/></h2>
              </div>
            </div>
          </div>


          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={UpdateDonorUser}>
                 Update
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdUpdate/></h2>
              </div>
            </div>
          </div>


          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={ResetDonorUserPassword}>
                  ResetPassword
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdPassword/></h2>
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
