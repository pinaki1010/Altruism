import React from "react";
import Footer from "../Footer/Footer";
import { AdminUserGrid } from "./AdminUserGrid";
import { AdminUserNav } from "./AdminUserNav";


export const AdminUserUi = () => {
  return (
    <div>
    <AdminUserNav/>
  <AdminUserGrid/>
     <Footer/>
    </div>
  );
};
