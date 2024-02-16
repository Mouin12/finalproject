
import React, { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import Footerr from "./Footerr";
import Navbarr from "./Navbarr";
import { userupdate } from "../JS/userSlice/userSlice";

const Profil = () => {
  const user = useSelector((state) => state.user?.user);
  console.log(user)
  const dispatch=useDispatch()
  const [upuser, setupuser] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email:user?.email,
    password:user?.password
  })
  return (
    <div>
    <Navbarr />
    <div style={{width:'100%',height:'500px',alignItems:'center' ,textAlign:'center'}}>
    <h1> votre compte</h1> 
    <div  className="profill">
<div className="box-m" >
<img style={{width:'50px'}} src="https://img.freepik.com/psd-premium/illustration-vectorielle-icone-du-profil-utilisateur-3d_1045752-555.jpg?w=740" ></img> <h2>informations personneles</h2>
 <div >
  <input type="text" placeholder={user?.email} onChange={(e)=>setupuser({...upuser,email:e.target.value})}></input>
  
    <button onClick={()=>dispatch(userupdate({id:user?._id,user:upuser}))}> mise à jour</button>

    <input type="text" placeholder={user?.password} onChange={(e)=>setupuser({...upuser,password:e.target.value})}></input>
  
    <button onClick={()=>dispatch(userupdate({id:user?._id,user:upuser}))}> mise à jour</button>

    </div>
    </div>
    <div className="box-m" >  <img style={{width:'50px'}} src="https://img.freepik.com/vecteurs-libre/calendrier-jour-independance_1057-255.jpg?w=740&t=st=1707871030~exp=1707871630~hmac=37e29058cbf3089a76a879b4852e07a4f10a9f00642b575971d85a4e78324329" ></img><h2>historique de votres commandes </h2></div>
 <div className="box-m" ><img style={{width:'60px'}} src="https://img.freepik.com/vecteurs-libre/concept-destination-voyage-voyage-international-pointeur-rouge-carte-du-monde-gris-interieur_333792-53.jpg?w=740&t=st=1707872267~exp=1707872867~hmac=8005f476767985a2b0559f5a27ae4db9251d1d0beb8d7b3d54767d77f20b6b26" ></img><h2>ajouter votre premiére adresse</h2> </div>
 
    </div>
</div>
<Footerr />
</div>
  );
};

export default Profil;