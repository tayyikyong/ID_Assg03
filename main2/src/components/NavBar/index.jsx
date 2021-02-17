import {
  Container,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  Typography,
  
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
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
          <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#home">Astro Shop</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="C:\Users\The Tay Family\Documents\Yik Yong\ID\Astro-Shop\Astro\src\components\Leader-Board--master\index.html">Leaderboards</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
   
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
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
