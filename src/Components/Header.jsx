import React from 'react'
import { AppBar, 
    InputBase, 
    Typography,
    Toolbar,
    IconButton } 
  from "@material-ui/core";
  
  import { Search,
    AccountCircle,
    Menu } 
  from "@material-ui/icons";
  
  import '../scss/header.scss';
  

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="static" style={{ background: '#b5a43f' }}>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        className="menuButton"
                        color="inherit"
                        aria-label="open drawer"
                        >
                            <Menu />
                        </IconButton>
    
                        <Typography className="title" variant="h6" noWrap>
                            Fundoo
                        </Typography>
  
                         <div className="search">
                            <div className="searchIcon">
                                <Search/>
                            </div>
                            <InputBase placeholder="Search" className="searchInput" />
                        </div>
  
                        <div className="profile">
                            <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            >
                                <AccountCircle style={{ fontSize: 30 }} />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default Header;