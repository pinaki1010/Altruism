import React from "react";
import Footer from "../Footer/Footer";
import { NgoUserNav } from "./NgoUserNav";
import { NgoUserGrid } from "./NgoUserGrid";


export const NgoUserUi = () => {
  return (
    <div>
      <NgoUserNav/>
     <NgoUserGrid/>
     <Footer/>
    </div>
  );
};
