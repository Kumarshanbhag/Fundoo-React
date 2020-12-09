import React from 'react'
import {
    AppBar,
    InputBase,
    Typography,
    Toolbar,
    IconButton,
    ClickAwayListener
}
    from "@material-ui/core";

import {
    Search,
    AccountCircle,
    Menu
}
    from "@material-ui/icons";

import '../scss/header.scss';
import Sidebar from "../Components/Sidebar"

import NoteLabelAPI from '../Services/NoteLabelServices.jsx'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            labelList : []
        };
        this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    }

    componentWillMount = () => {
        NoteLabelAPI.getLabelsList((res) => {
            this.setState({labelList : res.data.data.details})
        })
    }


    handleToggleDrawer = () => {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    }

    handleClickAway = () => {
        this.setState({ toggle: false });
    }

    render() {
        console.log("Toggle", this.state.toggle);
        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <div>
                    <AppBar position="static" style={{ background: '#b5a43f' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className="menuButton"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => this.handleToggleDrawer()}
                            >
                                <Menu />
                            </IconButton>
                            <Sidebar openDrawer={this.state.toggle} allLabel={this.state.labelList}/>

                            <Typography className="title" variant="h6" noWrap>
                                Fundoo
                        </Typography>

                            <div className="search">
                                <div className="searchIcon">
                                    <Search />
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
                </div>
            </ClickAwayListener>
        )
    }
}

export default Header;