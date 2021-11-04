import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../pages/contact";
import Login from "../LoginPage/Login";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>Office Address</h3>
            <h4 className="list-unstyled">
                <li>Altruism</li>
              <li>7008968017</li>
              <li>Puri, Odisha</li>
              <li>Near Jagganath Temple, Puri</li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Altruism</h4>
            <h5 className="list-unstyled">
              <li><Link  to="/About">About</ Link></li>
              <li><Link to="/Contact">Contact</Link></li>
             <li> <Link to="/Login">Login</Link></li>
            </h5>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Find us On</h4>
            <ui className="list-unstyled">
            <Link>
                       <img src="https://assets.milaap.org/assets/footer/facebook-f415d9cbdff5646a2a29abb68aefb8dc783b6110d668f199a98418dc760a00a0.png" width="30px" alt=""/>
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/twitter-d5a78b18b5df704a5b3144516433e9f643cdb71be98d050d0dfe96f639eac065.png" width="30px" alt=""/>
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/linkedin-d5288c587401ffbee66b52be8a26a6ae441c18c3e3189ae9f4a4b272b10c27f5.png" width="30px" alt=""/>
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/instagram-ae04f97b313d2e7d566b3b6fca9af23692d1043d5a4c9d25a4db5e780cc6b2f6.png" width="30px" alt=""/>
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/youtube-7d80782e10238307e6d68514f43fc241fdb8dad3508c33b2f1a6484a973c9cd1.png" width="30px" alt=""/>
                            </Link>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Altruism | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;