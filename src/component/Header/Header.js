import React from 'react'
import styles from './HomePage.module.css'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import { BeneficiaryRegistration } from '../Registration/BeneficiaryRegistration';
import { useHistory } from "react-router";

export default function Header() {
    var history=useHistory()
    const  submitUser=async()=>{
        history.push("/BeneficiaryRegistration")
      }
   
    return (
        <div>
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <div className={styles.float}>
                    </div>
                    <div className={styles.leftdiv} >
                    <h1>Altruism</h1>
                    <h4>Free Crowdfunding for India</h4>

                    <div className={styles.top} >
                        <p className={styles.medical} >Raise funds online for medical emergencies and social causes</p>
                        <button type="button" className={styles.mybtn} onClick={submitUser} >Start a fundraiser - it's FREE</button>
                    </div>
                    <div className={styles.flex} >
                        <div>
                            <p>290,000 +</p>
                            <p>Fundraisers</p>
                        </div>
                        <div>
                            <p>Rs.1100 Crores +</p>
                            <p>Raised</p>
                            
                        </div>
                        <div className={styles.right} >
                            <p>4.7 Million +</p>
                            <p>Donations</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <div>
                        <img className="responsive"src="https://images.milaap.org/milaap/image/upload/v1597899996/production/entity_details/milaap_page/524/banner-image-sample2_1597899995.png?format=jpg" width="100%" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 style={{textAlign:"center" }} >Thousands are fundraising online on Altruism </h2>
                    <div className={styles.input} >
                        <input placeholder="Search by fundraiser name, title, location, cause or other keywords" />
                        <button type="btn" className={styles.searchbtn} >
                            <SearchIcon/>
                        </button>
                    </div>
                </div>
               </div>
               </div>
               

    )
}
