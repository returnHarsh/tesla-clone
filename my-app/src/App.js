import './App.css'
import React from 'react'
import {Link} from "react-router-dom"
import Header from './components/header';
import Home from './components/home';
import Section from './components/section';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';



function App() {
  return (
    <div>

    <Container>

      <Header/>

      <Section
      title = "Model S"
      description = "Order Online for Touchless Delivery"
      backgroundImage = "model-s.jpg"
      leftButton = "Custom Order"
      rightButton = "Exsisting Inventory"
      ></Section>
      
      <Section
      title = "Model Y"
      description = "Order Online for Touchless Delivery"
      backgroundImage = "model-y.jpg"
      leftButton = "Custom Order"
      rightButton = "Exsisting Inventory"
      ></Section>

      <Section
      title = "Model X"
      description = "Order Online for Touchless Delivery"
      backgroundImage = "model-x.jpg"
      leftButton = "Custom Order"
      rightButton = "Exsisting Inventory"
      ></Section>

      
<Section
      title = "Model 3"
      description = "Order Online for Touchless Delivery"
      backgroundImage = "model-3.jpg"
      leftButton = "Custom Order"
      rightButton = "Exsisting Inventory"
      ></Section>


<Section
   title = "Lowest Cost Solar Panel in America"
   description = "Money-back gurantee"
   backgroundImage = "solar-panel.jpg"
   leftButton = "Order Now"
   rightButton = "Learn More"
>
   
</Section>


<Section
   title = "Accessories"
   description = ""
   backgroundImage = "accessories.jpg"
   leftButton = "Shop Now"
   rightButton = "Learn More"
>
  
</Section>
     


    </Container>

    </div>
  )
}

export default App

const Container = styled.div` 
height:100vh;
`