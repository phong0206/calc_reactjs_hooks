import React from 'react'
import { Button, ButtonGroup, WrapItem,Wrap,Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import { Grid, GridItem } from '@chakra-ui/react'
import '../../src/App.css'
import { useState } from 'react'
import '../bootstrap-4.5.3-dist/css/bootstrap.css'

const Btn = styled.button`

  background: orange;
  border: 2px solid lightblue;
  font-size: 30px;
  height: 60px;
  width: 93px;
  
  color: rgb(255, 255, 255);

 text-align: center;
 padding: 15px 32px;
  font-weight: bold;

 text-justify: center;
  margin-top:5px;
  
` 
const BoxBtn = styled.div`
 weight: 300px;
  text-justify: center;


`
const Show = styled.div`
  margin: auto;
  width: 80%;
  border: 5px solid teal;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  font-size: 30px;
  align:center;
  color: green;

`
const Buttone = () => {
  const [input, setInput] = useState("");
  return (
  <>
  
    <Show> {input} </Show><br /><br />
    <BoxBtn>

    
   <div class="container">
    <div class="row"> 
    <Btn onClick={() => setInput("")}>C</Btn>       
    <Btn onClick={() => {setInput(input.substr(0,input.length-1))}}>cl</Btn>
      
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {"%"} 
        
      >   
          %
      </Btn>
       
       
             <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "**"
        key = "^"
       
      >   
        ^
      </Btn>
        
    </div>
    <div class="row">
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {7} 
        key = {7} 
      >   
          {7} 
      </Btn>
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {8} 
        key = {8} 
      >   
          {8} 
      </Btn>
       
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {9} 
        key = {9} 
      >   
          {9} 
      </Btn>
       
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "/" 
        
      >   
          /
      </Btn>
       
    </div>
    <div class="row">
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {4} 
        key = {4} 
      >   
          {4} 
      </Btn>
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {5} 
        key = {5} 
      >   
          {5} 
      </Btn>
       
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {6} 
        key = {6} 
      >   
        {6} 
      </Btn>
       
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "*" 
       
      >   
          *
      </Btn>
       
    </div>
    <div class="row">
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {1} 
        key = {1} 
      >   
          {1} 
      </Btn>
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {2} 
        key = {2} 
      >   
          {2} 
      </Btn>
       
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {3} 
        key = {3} 
      >   
          {3} 
      </Btn>
       
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "-"
        
      >   
          - 
      </Btn>
       
    </div>
    <div class="row">
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = {0} 
        key = {0} 
      >   
          {0} 
      </Btn>
        
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "." 
        
      >   
          ,
      </Btn>
       
        
            <Btn
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 && String(eval(input)).includes(".") ? String(eval(input).toFixed(4)) : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          &nbsp;=
        </Btn>
       
            <Btn 
        onClick = {(e) => {setInput(input + e.target.value)}} 
        value = "+"
        
      >   
          +
      </Btn>
       
    </div>
</div>
</BoxBtn>
    
  </>
    
  
    
  )
}



export default Buttone

