import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addcommande } from '../JS/commandeSlice'
import Navbarr from './Navbarr';
import Footerr from './Footerr';
const Details = () => {
    const params=useParams()
    const user=useSelector((store)=>store.user?.user)
    const products=useSelector((state)=>state.product?.product)
    const product=products?.filter((el)=>el._id==params.id)[0];
      const [newcommande, setnewcommande] = useState({
    nameuser:user?.name,
    Iduser:user?._id,
    nomprduit:product.name,
    price:product.price,
    quantite:"",

  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
   
    <div>
    <Navbarr />
      <div className='korg600'>
      <div  className='part1'>
      

      <img  style={{width:'450px' , justifyContent:'space-around' ,alignItems: 'center'}} src={product?.image} /> 
     
     <h1>  prix:{product?.price} </h1>
      </div>

      
        <div  style={{width:'400px' , textAlign:'centre', justifyContent:'space-around' , marginTop:'50px'  }}>
       <div> <h1>  {product?.name}</h1></div>
        <div> 
        <p  >
         {product?.description}

         </p></div>
         
         <div style={{width:'100%' , textAlign:'centre', justifyContent:'space-between' ,alignItems: 'center', }}>
        <input type='number' onChange={(e)=>setnewcommande({...newcommande,quantite:e.target.value})}  placeholder='quantite'/>
         
         <button onClick={()=>(dispatch(addcommande(newcommande)),navigate('/panier'))}>ajouter au panier </button> </div></div>
    </div>
    <Footerr />
    </div>
   
  )
}

export default Details;
