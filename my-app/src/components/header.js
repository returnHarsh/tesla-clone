import "./header.css"
import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Fade from 'react-reveal/Fade';
import { Translate } from "@material-ui/icons"

function Header() {
  const[burgerState , setBurgerState] = useState(false);



  return (

    <Container>


      <a className="leftMenu">
      <img src="images/logo.svg" alt="" />
      </a>

      <div className="menu">
<p><a href="#">Model S</a></p>
<p><a href="#">Model Y</a></p>
<p><a href="#">Model X</a></p>
<p><a href="#">Model 3</a></p>
</div>

<div className="rightMenu">
  <a href="#">Shop</a>
  <a href="#">Tesla Account</a>

<CustomMenu onClick={()=> setBurgerState(true)}>

</CustomMenu>

</div>
{burgerState &&
      <BurgerNav show = {burgerState}>
        <CustomWrap>
        <CustomClose onClick={()=> setBurgerState(false)} />
        </CustomWrap>
        <li><a href="#">Exsisting Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>
}
    </Container>

  )
}

export default Header

const Container = styled.div` 
min-height: 60px;
width:100vw;
position:fixed;
display:flex;
align-items:center;
padding : 0 20px;
justify-content: space-around;


`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
margin-left:30px
`

const BurgerNav = styled.div`
list-style-type:none;
position:fixed;
width:250px;
top:0;
bottom:0;
right:0;
background-color:white;
z-index:1000;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
// transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};

li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}


`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CustomWrap = styled.div`
display:flex;
justify-content:flex-end;
`