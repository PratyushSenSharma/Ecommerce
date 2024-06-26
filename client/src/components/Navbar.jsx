import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "../styles/navbar.scss"

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src='/img/ind_flag.jpg' alt='' width="40" height="30" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Posters</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Figures</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Manga</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>WEEBSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          <div className="icons">
          <SearchIcon />
          <PermIdentityOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
          </div>

        </div>
      </div>
      {open && <Cart/>}
    </div>

  )
}

export default Navbar