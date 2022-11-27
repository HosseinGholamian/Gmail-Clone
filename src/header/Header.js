import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
function Header() {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.user)
    const signOut = ()=>{
        dispatch(logout())
    }
    return (
        <div className="header">


            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://th.bing.com/th/id/R.7028224df44381261916e6c5411e1249?rik=uv7kbG5WxTM%2bhQ&pid=ImgRaw&r=0" alt="" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" name="" id="" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} sx={{ bgcolor: deepOrange[500] }} src={user?.photoUrl}>{user?.displayName[0]}</Avatar>

            </div>
        </div>
    )
}

export default Header