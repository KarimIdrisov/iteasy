import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        width: '28%',
        height: '40vh',
        margin: '3vw 3vh 3vw 3vh'
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

    return (
        <>
            <Card key={props.number} className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant='h6' gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.btn}>
                    <Button size="small" onClick={handleClickOpen}>Learn More</Button>
                </CardActions>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
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
