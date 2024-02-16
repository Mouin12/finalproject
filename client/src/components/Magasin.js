import React, { useState } from 'react';

import Navbarr from './Navbarr';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footerr from './Footerr';

const Magasin = () => {
  const products=useSelector((store)=>store.product?.product)
  const user=useSelector((store)=>store.user?.user)

  console.log(products)
  return (
    <div>
    <Navbarr />
    <div class="wrapper">
      {products?.map((el)=>(
        <> 
<div class="card">
<img  className='img4x' src={el.image} alt='korg4x'/>
  <div class="info">
    <h1>{el.name}</h1>
    <p> {el.description} </p>
    <Link to={`/details/${el._id}`}>Détails</Link>
  </div>

</div>
</>
      ))}
</div>
<Footerr />
    </div>
  );
}

export default Magasin;
