import React from 'react'
import "../styles/contact.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>BE IN TOUCH WITH US</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your e-mail...' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <InstagramIcon />
                    <FacebookOutlinedIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>
            </div>
        </div>
    )
}

export default Contact