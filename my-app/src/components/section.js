import "./section.css"
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage = {props.backgroundImage}>

<Fade bottom>
     <div className="itemText">
     <h1 className="modelName">{props.title}</h1>
            <p>{props.description}</p>
     </div>
     </Fade>
     


<Fade bottom>
        <div className="button">

        <div className="buttonGroup">
        

            <button className="leftButton">{props.leftButton}</button>
            <button className="rightButton">{props.rightButton}</button>
        </div>

    

</div>
</Fade>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}") `} ;

 `
