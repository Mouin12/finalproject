import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecommande } from '../JS/commandeSlice'
import Navbarr from './Navbarr'
import Footerr from './Footerr'

const Panier = () => {
    const user=useSelector((store)=>store.user?.user)
    console.log("user",user)
    const products=useSelector((state)=>state.product?.product)
    const commandes=useSelector((store)=>store.commande?.commande)
    console.log("commandes",commandes)
    const commande_user=commandes?.filter((el)=>el.Iduser==user?._id)
    console.log("commande_user",commande_user)
    const dispatch=useDispatch()
  return (
    <div >
    <Navbarr />

<div >
      <div style={{  width:'100%' , alignItems:'center',textAlign:'center',fontFamily:'fantasy'
      
    }}><h1>Panier</h1></div>
      <div className='panier-list'>
{commande_user?.map((el)=>(
  <>
    <div  className='panier-cmd'>
        <h1>{el?.nomprduit}</h1>
        <h1>prix:{el?.price}</h1>
        <h1> la quantite:{el?.quantite}</h1>
        </div>
        <button onClick={()=>dispatch(deletecommande(el._id))}>SUPPRIMER</button>
        </>
))}
</div>
</div>
<Footerr />
    </div>

    
  )
}

export default Panier
