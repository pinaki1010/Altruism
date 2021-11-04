import React from "react";
import Footer from "../Footer/Footer";
import { DonorUserGrid } from "./DonorUserGrid";
import { DonorUserNav } from "./DonorUserNav";

export const DonorUserUi = () => {
  return (
    <div>
      <DonorUserNav/>
     <DonorUserGrid/>
     <Footer/>
    </div>
  );
};
