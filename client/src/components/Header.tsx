import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Svg from './Svg'
import {Link} from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    main: {
        height: '9.4vh',
        background: '#e4eceb',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
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
        fontSize: '2rem',
    },
    hide: {
        display: 'none'
    },
    mobileMenu: {
        marginTop: '2.5rem',
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
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
                        <Link to={'/'}>Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
                        <Link to={'/news'}>News</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
                        <Link to={'/trends'}>Trends</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
                        <Link to={'/terms'}>Terms</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}
