import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imge: {
        top: '-2vh',
        width: '16vw',
        height: '13vh',
    },
}));

export default function Svg() {
    const classes = useStyles();
    return (
        <img src="logo.png" alt="logo" className={classes.imge}/>
    );
}
