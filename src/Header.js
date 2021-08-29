import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, InputBase } from '@material-ui/core';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'

function Header (){
    return(
        <div className='root'>
            <AppBar position ='fixed'>
                <Toolbar>
                    <IconButton
                    >
                       <img src ='/app_logo.png' className='app-logo'/>
                    </IconButton>
                    <Typography className = 'menuTitle' variant="h6">
                        Home
                    </Typography>
                    <Typography className = 'menuTitle' variant="h6" >
                        TV-Shows
                    </Typography>
                    <Typography className = 'menuTitle' variant="h6" >
                        Movies
                    </Typography>
                    <Typography className = 'menuTitle' variant="h6" >
                        Kids
                    </Typography>
                    <div className='search'>
                        <div className='searchIcon'>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: 'inputRoot',
                                input: 'inputInput',
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
