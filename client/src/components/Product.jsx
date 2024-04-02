import React, { useState } from 'react'
import "../styles/product.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const Product = () => {
  const [selsctedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709675577966-6231e5a2ac43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627672360124-4ed09583e14c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selsctedImg]} alt=""></img>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$144</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum hic architecto expedita illum, animi laudantium ut, aperiam non debitis cum quis ea temporibus 
          placeat officiis quia beatae veritatis consequatur saepe?</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev=== 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <ShoppingCartOutlinedIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceOutlinedIcon/> COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: AniStacks</span>
          <span>Product Type: Poster</span>
          <span>Tag: Anime, Poster</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>

        </div>
      </div>
    </div>
  )
}

export default Product