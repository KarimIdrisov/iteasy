import React from 'react';
import InputBase from '@material-ui/core/InputBase'
import {makeStyles} from '@material-ui/core/styles';
import Svg from './Svg'
import {Link} from "react-router-dom";
import {InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100vw',
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
    }
}));

const links = [
    {title: 'Home', url: ''},
    {title: 'News', url: ''},
    {title: 'Trends', url: ''},
    {title: 'About us', url: ''},
]

export default function Header(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.logo}>
                <Svg/>
            </div>
            <div className={classes.innerCont}>
                <InputBase placeholder="Search" className={'bg-white rounded p-1 w-80'}
                           inputProps={{'aria-label': 'search'}}
                           startAdornment={
                               <InputAdornment position="start">
                                   <SearchIcon/>
                               </InputAdornment>
                           }
                />
                <div className={'mr-4 ml-4 container flex text-3xl'}>
                    {links.map(link => (
                        <Link to={link.url} className={'mx-auto text-2xl font-bold'}>
                            <h5>{link.title}</h5>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
