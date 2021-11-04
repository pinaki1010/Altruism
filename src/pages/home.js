
import Container from '@material-ui/core/Container';
import ControlledCarousel from "../component/ControlledCarousel.js";

import Navbar from '../component/NavBar/Navbar';
import Footer from "../component/Footer/Footer.js";
import MultiCarsouel from "../component/MultiCarsouel/Multicarsouel.js";
import Header from "../component/Header/Header.js";





function home() {
  return (
    <>
  <Navbar/>
    <Container> 
      <Header/>
   <ControlledCarousel/>
 <MultiCarsouel/>
   </Container>
   <Footer/>
   </>
  
  
  );
}
export default home;