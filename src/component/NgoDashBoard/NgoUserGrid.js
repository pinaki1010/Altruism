import React from "react";
import { MdAddAlarm,MdAccountBox,MdRequestPage,MdCalendarToday ,MdUpdate,MdList,MdPassword,MdCreateNewFolder,MdLogout} from "react-icons/md";
import { useHistory } from "react-router";
import NgoCreateNewRaiseCase from "./NgoCreateNewRaiseCase";
import axios from "axios";




export const NgoUserGrid = () => {

    var history=useHistory()

    const UserProfileView=(e)=>{
     
        history.push('/NgoUserProfileView')
        
    }

    const Withdrawl=()=>{
        history.push('/NgoWithdrawl')
    }

    const ExtendExpireDate=()=>{
        history.push('/NgoExtendExpireDate') 
    }

    const UpdateUser=()=>{
        history.push('/UpdateNgoUser') 
    }

    const DonorList=()=>{
        history.push('/NgoDonorList') 
    }

    const ResetUserPassword=()=>{
        history.push('/NgoResetUserPassword') 
    }
    const NgoCreateNewRaiseCase=()=>{
      history.push('/NgoCreateNewRaiseCase') 
  }

  const Logout=()=>{
    alert("Are You Sure!!")  
      axios
      .post("http://localhost:9009/logout")
      .then((response) => {
        if (response.status === 200) {
         console.log(response.data)
         
         
        }else{
          console.log(response)
        }
      }) 
      sessionStorage.removeItem("ngoId")
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
                <button class="btn btn-primary mx-4" value={1234} type="submit" onClick={UserProfileView}>
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
                <button class="btn btn-primary mx-4" type="submit" onClick={Withdrawl}>
                  Withdrawl
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdRequestPage/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={ExtendExpireDate}>
                 ExtendExpire
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdCalendarToday/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={UpdateUser}>
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
                <button class="btn btn-primary mx-4" type="submit" onClick={DonorList}>
                 DonorList
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdList/></h2>
              </div>
            </div>
          </div>

          
          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={NgoCreateNewRaiseCase}>
                NewCase
                </button>
              </div>
              <div class="card-body text-primary">
              <h2 class="card-title mx-5"><MdCreateNewFolder/></h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              class="card border-primary mb-3"
              style={{ "max-width": "200px" }}
            >
              <div class="card-header bg-primary">
                <button class="btn btn-primary mx-4" type="submit" onClick={ResetUserPassword}>
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
