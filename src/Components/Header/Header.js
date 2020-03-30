import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    '& header': {
        color: 'white'
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <header className="header">
            {props.showBack ? <Link to="/"><ArrowBack id="back" /></Link> : <div></div>}
            <h1>share eat</h1>
        </header>
    )
}