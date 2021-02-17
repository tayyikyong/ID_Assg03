import {
  Container,
  AppBar,
  Toolbar,
  
  IconButton,
  Badge,
  Typography,
  
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./style.css";

const NavBar = ({ basketItems, totalCost }) => {
  const location = useLocation();
  
  return (
   
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
          
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
              color="inherit"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/miscellaneous-colorful/48/saturn-512.png"
                alt="Astro logo"
                height="25px"
                className="logo"
              />
            </Typography>
            <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#home">Astro Shop</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="http://localhost:3001/" >Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="">Leaderboards</ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
   
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
            {location.pathname === "/basket" ? (
              <div className="basket-wrapper">
                <h2>
                  Total cost: <strong>{totalCost}</strong>
                </h2>
              </div>
            ) : (
              <div className="basket-wrapper">
                <IconButton
                  component={Link}
                  to="/basket"
                  aria-label="Show basket contents"
                  color="inherit"
                >
                  <Badge badgeContent={basketItems} color="secondary">
                    <ShoppingCart className="custom-basket" />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    
  );
};


export default NavBar;
