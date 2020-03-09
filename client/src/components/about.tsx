import React, { FC } from 'react';
import { FaArrowLeft, FaBeer, FaBicycle, FaFlag, FaFlickr } from 'react-icons/fa';
import { Button, Icon, Label } from 'semantic-ui-react';
import './App.css';
type Props = {
  profile: string
}
const About: FC<Props> = (Props) => {
  return (
    <div className="about">
      <h2>About {Props.profile}</h2>
      <Button> 
      <Icon className="arrow right" color="green"  size='big' />
      <Icon disabled name='users' />
    </Button>
    <Label>
    <Icon name='mail' /> 23
  </Label>
  <FaBeer />
  <FaFlag />
  <FaFlickr />
  <FaArrowLeft />
  

  <br />
  <FaBicycle width="100 px"/>
  <i className="fa fa-spinner fa-spin">no spinner but why</i>
   
    </div>
  );
}
export default About
