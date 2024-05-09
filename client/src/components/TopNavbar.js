// TopNav.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, useMediaQuery, List, ListItem, ListItemText, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  '& .MuiToolbar-root': {
    backgroundColor: "black",
  },
}));

const SignInButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto', // Push the button to the right
}));

export function TopNav() {
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:600px)");
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
        <StyledAppBar position="fixed">
            <Toolbar variant="regular">
                {small && (
                    <>
                        <List>
                            <ListItem button>
                                <Button onClick={handleClick}>
                                    <MenuIcon color="error" sx={{ fontSize: 40 }} />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </Button>
                                <Typography variant="h6" onClick={() => setOpen(false)}>
                                    <img className="relative w-[237px] h-[57px] object-cover" alt="BayDevelopsLogo" src="/img/baydevelopslogo-1-1@2x.png" />
                                </Typography>
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button component={Link} to="/"> <ListItemText primary="Home"/> </ListItem>
                                    <ListItem button component={Link} to="/about"> <ListItemText primary="About" /> </ListItem>
                                    <ListItem button component={Link} to="/contact"> <ListItemText primary="Contact" /> </ListItem>
                                    <ListItem button component={Link} to="/pricing"> <ListItemText primary="Pricing" /> </ListItem>
                                    <ListItem button component={Link} to="/about"> <ListItemText primary="Sign In" /> </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </>
                )}
                {full && (
                    <>
                        <Typography variant="h6" color="secondary">
                            <img className="relative w-[237px] h-[57px] object-cover" alt="BayDevelopsLogo" src="/img/baydevelopslogo-1-1@2x.png" />
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <Button color="inherit" component={Link} to="/contact">Contact</Button>
                        <Button color="inherit" component={Link} to="/pricing">Pricing</Button>
                        <SignInButton color="inherit" component={Link} to="/login">Sign In</SignInButton>
                    </>
                )}
            </Toolbar>
        </StyledAppBar>
    );
}

export default TopNav;
