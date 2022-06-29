import * as React from 'react';
import {useState,useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import Urls from '../Constants/Urls';
import Filter from '../Constants/Filters';
import {Postdatanew,Postdata,PostdataToken,Getdata} from '../Api/RestServices';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
}));

export default function SearchBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [search_input,set_searchInput]=useState([]);
    const isMenuOpen = Boolean(anchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    
  
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handle_SearchInput=(event)=>{
        console.log(event.target.value);
        set_searchInput(event.target.value);
        if(event.target.value)
            props.Get_BookList({choice:"title",data:event.target.value})
        else
            props.Get_BookList({choice:"",data:event.target.value})
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
            <MenuList dense={true}>
                {Filter.data.map(item =>
                    <MenuItem onClick={handleMenuClose}>{item.sector}</MenuItem>
                )}
            </MenuList>
        </Menu>
    );

    //const menuId = 'primary-search-account-menu';
    return (
        <Box sx={{ flexGrow: 1,alignItems:'center',justifyContent:'center'}}>
            <Search style={{width:'80%',backgroundColor:'orange',alignSelf:'center',justifyContent:'center',alignContent:'center'}}>
                <SearchIconWrapper>
                <SearchIcon />

                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    value={search_input}
                    onChange={handle_SearchInput}
                    inputProps={{ 'aria-label': 'search' }}
                    style={{width:'85%',color:'black'}}  
                />
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    style={{width:'15%',alignSelf:'center'}}>
                    <FilterAltOffIcon fontSize='small' style={{color:'black'}}/>
                </IconButton>
            </Search>
            {renderMenu}
        </Box>
    );
}
