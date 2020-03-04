import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './App.css';


type Props = {
  name: string;
};
const Footer: FC<Props> = Props => {
  return (<div>
      <p>For more information contact us</p>
    <div className='footer mobileFooter'>
      <div className="item">About Hyperting<br />Contact Us <br />Support</div>
      <div className="item">Resources<br />staff <br/>  community </div>
      <div className="item">Manage Account<br />Create Account <br /> inquiry</div>
    </div>
    <a href='https://www.youtube.com' >
      <IconContext.Provider value={{color: 'red', size: '30px'}}>
        <FaYoutube />
      </IconContext.Provider>
      </a>

      <a href='https://www.facebook.com' >
      <IconContext.Provider value={{color: 'red', size: '30px'}}>
        <FaFacebook />
      </IconContext.Provider>
      </a>

      <a href='https://www.twitter.com' >
      <IconContext.Provider value={{color: 'red', size: '30px'}}>
        <FaTwitter />
      </IconContext.Provider>
      </a>

      <a href='https://www.linkedin.com' >
      <IconContext.Provider value={{color: 'red', size: '30px'}}>
        <FaLinkedin />
      </IconContext.Provider>
      </a>

      <a href='https://www.instagram.com' >
      <IconContext.Provider value={{color: 'red', size: '30px'}}>
        <FaInstagram />
      </IconContext.Provider>
      </a>
      <IconContext.Provider value={{ color: 'green', size: '20px'}}>
        <FaCopyright />
      </IconContext.Provider>
      Hyperting srl.
    </div>
  );
};
export default Footer;
