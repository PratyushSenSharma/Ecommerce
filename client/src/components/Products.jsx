import React, { useState } from 'react'
import "../styles/products.scss"
import  List  from './List.jsx'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId =parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000)
   const [sort,setSort]=useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>T-Shirts</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={1}/>
            <label htmlFor='2'>Action Figures</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={1}/>
            <label htmlFor='3'>Posters</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <spam>0</spam>
            <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <spam>{maxPrice}</spam>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")}/>
            <label htmlFor='asc'>Price(Lowest first)</label>
          </div>
        <div className="inputItem">
            <input type='radio' id='desc' value='desc' name='price'onChange={(e)=>setSort("desc")}/>
            <label htmlFor='desc'>Price(Higest first)</label>
          </div>
          </div>

      </div>
      <div className="right">
        <img className="catImg" src='https://i.pinimg.com/originals/55/72/6a/55726ab55267da4c81911d308a987175.jpg' alt=''/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products