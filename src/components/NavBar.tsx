import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.nav`
    background-color: aqua;
    height: 10vh;
    width: 100%;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 2rem;
  font-family: cursive;
    font-size: large;
`;

const ListItem = styled.li`
    display: inline;
    margin: 3rem;
`

const LinkItem = styled(Link)`
  text-decoration: none;
`

function NavBar() {
  return (
    <NavigationBar>
        <NavList>
          <ListItem>
            <LinkItem to="/">Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/store">Store</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/about">About us</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/contact">Contact</LinkItem>
          </ListItem>
        </NavList>
    </NavigationBar>
  )
}

export default NavBar
