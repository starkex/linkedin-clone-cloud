import React from 'react'
import styled from 'styled-components'
import Linklogo from '../images/login-logo.svg';

const Container = styled.div``;

const Join = styled.a`
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    cursor: pointer;
  }
`;

const Nav = styled.nav`

    max-width: 1128px;
    margin:auto;
    display:flex;
    padding:12px 0 16px;
    align-items:center;
    flex-wrap:nowrap;
    justify-content: space-between;
    position:relative; 

    & > a {
        width:135px;
        height:34px;
        @media(max-width:768px){
            padding:0.5px;
        }
    }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
      cursor: pointer;
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

function Login() {
  return (
    <Container>
        <Nav>
            <a href='/'>
                <img src={Linklogo} />
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign Up</SignIn>
            </div>
        </Nav>
    </Container>
  )
}

export default Login