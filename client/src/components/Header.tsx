import React from 'react';
import InputBase from '@material-ui/core/InputBase'
import {makeStyles} from '@material-ui/core/styles';
import Svg from './Svg'
import {Link} from "react-router-dom";
import {Button, IconButton, InputAdornment, Menu, MenuItem} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import clsx from "clsx";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    main: {
        height: '9.4vh',
        background: '#85dcb8',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-start",
        fontFamily: 'Lato',
    },
    innerCont: {
        margin: '1.2rem',
        display: 'flex',
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        marginTop: '0.3rem',
        marginLeft: '1rem',
        width: '20%',
        height: '85%',
    },
    linkBox: {
        marginRight: '3vw',
        marginLeft: '3vw',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',

    },
    linkItem: {
        marginRight: '3vw',
        marginLeft: '3vw',
        fontSize: '2.0rem',
    },
    hide: {
        display: 'none'
    },
    mobileMenu: {
        marginTop: '3.5rem',
        width: '100vh',
    },
    mobileMenuItem: {
        fontSize: '2rem',
    }
}));

const links = [
    {title: 'Home', url: '/'},
    {title: 'News', url: '/news'},
    {title: 'Trends', url: '/trends'},
    {title: 'Terms', url: '/terms'},
    {title: 'About us', url: '/about'},
]

export default function Header() {
    const classes = useStyles();

    // test
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    // header menu for mobile devices

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.main}>
            <div className={classes.logo}>
                <Link to='/'>
                    <Svg/>
                </Link>
            </div>
            <div className={classes.innerCont}>
                <IconButton
                    aria-controls="mobile-menu" aria-haspopup="true" onClick={handleClick}
                    className={clsx([''], {[classes.hide]: width > 1000})} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <InputBase placeholder="Search"
                           className={clsx(['bg-white rounded p-1 w-80'], {[classes.hide]: width < 1000})}
                           inputProps={{'aria-label': 'search'}}
                           startAdornment={
                               <InputAdornment position="start">
                                   <SearchIcon/>
                               </InputAdornment>
                           }/>
                <div className={clsx(['mr-4 ml-4 container flex text-3xl'], {[classes.hide]: width < 1000})}>
                    {links.map(link => (
                        <Link key={link.title} to={link.url} className={'mx-auto text-2xl font-bold'}>
                            <h5>{link.title}</h5>
                        </Link>
                    ))}
                </div>

                {/* mobile menu */}
                <Menu
                    id="mobile-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={classes.mobileMenu}>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>IT News</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>IT Trends</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>IT Terms</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
