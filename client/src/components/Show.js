

































import React from "react";
import { useSelector } from "react-redux";
import Footerr from "./Footerr";
import Navbarr from "./Navbarr";

const Profil = () => {
  const user = useSelector((state) => state.user?.user);
  console.log(user)
  return (
    <div>
   



      
    </div>
  );
};

export default Profil;