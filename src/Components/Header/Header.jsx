import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    }
}))

export default function Header() {
    const classes = useStyles();

    return (
        <div className="header">
            share eat
        </div>
    )
}