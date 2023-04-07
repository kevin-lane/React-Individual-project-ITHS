import React from 'react';
import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.nav`
    background-color: aqua;
    height: 10vh;
`

const NavList = styled.ul`
  list-style-type: none;
  /* background-color: deepskyblue; */
  margin: auto;
`;

const ListItem = styled.li`
    display: inline;
    margin: 3rem;
`

function NavBar() {
  return (
    <NavigationBar>
      <NavList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/store">Store</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About us</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Contact</Link>
        </ListItem>
      </NavList>
    </NavigationBar>
  )
}

export default NavBar
