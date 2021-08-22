import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Svg from "./Svg"
import clsx from 'clsx';

interface MenuLink {
    title: string,
    url: string
}

export default function Header(props: any) {

    const openMenu = () => {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__menu');

        burger?.classList.toggle('open');
        menu?.classList.toggle('open');
    }

    return (
        <header className='header'>
            <div className="container">

                <div className="header__row">

                    <div className="header__logo">
                        <Svg />
                    </div>

                    <div className="header__burger" onClick={openMenu} >
                        <span></span>
                    </div>

                    <nav className="header__menu">
                        <ul className="header__list">
                            {props.links.map((link: MenuLink, number: number) => {
                                return (
                                    <li className="header__link" key={number}>
                                        <Link to={link.url} className={clsx({ ['active-link']: link.title === props.page })}>
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}
