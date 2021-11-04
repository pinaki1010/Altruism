import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { BeneficiaryRegistration } from "../Registration/BeneficiaryRegistration";
import { NgoRegistration } from "../Registration/NgoRegistration";
import { DonorRegistration } from "../Registration/DonorRegistration";
import { Dropdown,ButtonGroup,Button } from "react-bootstrap";



const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#393E46",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    cursor: "pointer",
  width: "10"
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    }
  }
}));




function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.header}>
      <CssBaseline />

     
    
     
      
      <Toolbar>
        <Typography  variant="h5" className={classes.logo} >
          Altruism
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/Aboutus" className={classes.link}>
              About
            </Link>
            <Link to="/Contactus" className={classes.link}>
              Contact
            </Link>
            <Link to="/Donate" className={classes.link}>
              Donate
            </Link>
            <Link to="/Login" className={classes.link}>
              Login
            </Link>
        
            <Dropdown as={ButtonGroup}><i ></i>
    <Dropdown.Toggle  id="dropdown-custom-1" variant="black" style={{"color":"white"}}  ></Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="DonorRegistration">DonorRegistration</Dropdown.Item>
      <Dropdown.Item href="NgoRegistration">NgoRegistration</Dropdown.Item>
      <Dropdown.Item href="BeneficiaryRegistration">Beneficiary Registration</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;