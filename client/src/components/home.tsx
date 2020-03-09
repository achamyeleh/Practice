import React, { FC } from 'react';
import avator from '../images/avator.png';
const shoes:any = require('../images/shoes.jpg')
const girl:any = require('../images/girl.jpg')
const redShoe:any = require('../images/redShoe.png')
const whiteShoe:any = require('../images/whiteShoe.png')
const grayShoe:any = require('../images/grayShoe.png')
type Props = {
  name: string
}
const Home: FC<Props> = (Props) => {
  return (
    <div>
      <h2 className="text">This is my home page {Props.name}</h2>
      <img className='image' src={shoes} alt="Smiley face" height="242" width="242" />
      <img className='image' src={girl} alt="Smiley face" height="242" width="242" />
      <img className='image' src={redShoe} alt="Smiley face" height="242" width="242" />
      <img className='image' src={whiteShoe} alt="Smiley face" height="242" width="242" />
      <img className='image App-logo' src={grayShoe} alt="Smiley face" height="242" width="242" />
      <br/>
      <img className='image' src={shoes} alt="Smiley face" height="242" width="242" />
      <img className='image imgFilter' src={girl} alt="Smiley face" height="242" width="242" />
      <img className='image' src={redShoe} alt="Smiley face" height="242" width="242" />
      <img className='image' src={whiteShoe} alt="Smiley face" height="242" width="242" />
      <img className='image' src={grayShoe} alt="Smiley face" height="242" width="242" />
      <div id="card">
      <img src={avator} alt="Avatar" height="242" width="242" />
      <div className="cardContainer">
        <h4><b>John Doe</b></h4>
         <p>Architect & Engineer</p>
      </div>
    </div>
  </div>
  );
}

export default Home