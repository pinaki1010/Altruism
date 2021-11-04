import React from "react";
import Footer from "../Footer/Footer";
import { UserGrid } from "./UserGrid";
import { UserNav } from "./UserNav";

export const UserUi = () => {
  return (
    <div>
      <UserNav/>
      <UserGrid/>
     <Footer/>
    </div>
  );
};
