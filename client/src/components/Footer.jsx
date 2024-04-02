import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/footer.scss"
const Footer = () => {
  return (
  
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Posters</span>
          <span>Figures</span>
          <span>Manga</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Shipping rates</span>
          <span>Payments</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos earum hic dolore porro sit sint libero
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem odit harum dolore deserunt adipisci dignissimos ab odio impedit consequuntur architecto iste quos itaque, nihil nobis recusandae voluptate repudiandae excepturi!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span><HomeOutlinedIcon />Kolkata,WB</span>
          <span><MarkEmailReadOutlinedIcon />pratyushsensharma@gmail.com</span>
          <span><PermPhoneMsgOutlinedIcon />+91 9748181471</span>
          <span><LinkedInIcon />https://shorturl.at/tFO18</span>
          <span><GitHubIcon />github.com/PratyushSenSharma</span>

        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>WEEBSTORE</span>
          <span className='copyright'> © Copyright 2024. All Rights Reserved</span>

        </div>
        <div className="right">

          <img src='/img/payment.png' alt=''></img>
        </div>
      </div>


    </div>

  )
}

export default Footer