import React from 'react'
import styled from 'styled-components';
import Buttone from './Buttone';
const Section = styled.div`
  margin: auto;
  width: 80%;
  border: 5px solid teal;
  padding: 10px;
  height: 600px;
  border-radius: 20px;
  margin-top: 50px;

`
const Name = styled.p`
text-align:center;
    text-justify: center;
    font-weight: bold;
    color: #78ff99;
    font-size:40px;
`
const Buttonbox = () => {
  return (
    <Section><Name>CASIO</Name>
    <Buttone/>
      
    </Section>
  )
}

export default Buttonbox
