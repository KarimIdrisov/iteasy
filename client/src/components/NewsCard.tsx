import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardContent, CardMedia,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, Divider,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        width: '28%',
        height: '40vh',
        margin: '3vw 3vh 3vw 3vh'
    },
    minicard: {
        width: '60%',
        margin: '3vw 3vh 3vw 3vh',
        height: '70vh'
    },
    content: {
        height: '34vh'
    },
    btn: {
        margin: 'auto'
    },
    media: {
        height: '5vh',
    },
    dialog: {}
}));

export default function NewsCard(props: any) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    if (width < 800) {
        return (
            <>
                <Card key={props.number} className={classes.minicard} onClick={handleClickOpen}>
                    <CardContent className={classes.content}>
                        <Typography variant='body1' gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className={classes.dialog}
                    maxWidth='md'
                >
                    <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {props.text}
                            <Typography variant='h6'>{props.applicationName}</Typography>
                            <Typography style={{color: "black"}}>{props.applicationText}</Typography>

                            <Divider/>

                            <CardMedia
                                component="iframe"
                                width="280"
                                height="500"
                                src={props.video}
                                title="some video"
                            />

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

            </>
        )
    } else {

        return (
            <>
                <Card key={props.number} className={classes.card} onClick={handleClickOpen}>
                    <CardContent className={classes.content}>
                        <Typography variant='h6' gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className={classes.dialog}
                    maxWidth='md'
                >
                    <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {props.text}
                            <Typography variant='h6'>{props.applicationName}</Typography>
                            <Typography style={{color: "black"}}>{props.applicationText}</Typography>

                            <Divider/>

                            <CardMedia
                                component="iframe"
                                width="280"
                                height="500"
                                src={props.video}
                                title="some video"
                            />

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

            </>
        )
    }
}
