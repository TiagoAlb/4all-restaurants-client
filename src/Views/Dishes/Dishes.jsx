import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SubHeader from '../../Components/SubHeader/SubHeader.jsx';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '../../Components/Card/CardDish.jsx';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        '& input, textarea, div, form': {
            width: '100%'
        },
        textAlign: 'left'
    },

    fab: {
        position: 'fixed',
        backgroundColor: '#ffc107',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

    loading: {
        '& span': {
            padding: theme.spacing(2)
        },

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12pt',
        color: 'white'
    }
}));

export default function Dishes(props) {
    const classes = useStyles();
    const [dishes, setDishes] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const [message, setMessage] = useState(
        <div className={classes.loading}>
            <CircularProgress color="secondary" />
            <span>CARREGANDO PRATOS...</span>
        </div>);

    useEffect(() => {
        listDishes();
    }, []);

    const restService = new RestService(`api/places/${props.match.params.id}/dishes`);

    const listDishes = () => {
        restService.get((success) => {
            if (success.dishes.length > 0) {
                setSubtitle(success.dishes.length + ' pratos cadastrados');
                setDishes(success.dishes);
            } else {
                setMessage(<div style={{ color: 'white' }}>NÃO EXISTEM PRATOS PARA EXIBIR</div>);
            }
        },
            (error) => {
                alert(error);
            });
    };

    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <SubHeader title={props.pageName} subtitle={subtitle} />
                {
                    dishes.length > 0 ?
                        dishes.map(prop => (
                            <Card prop={prop} key={prop.id} />
                        ))
                        : message
                }
            </Container>
            <Link to={`/places/${props.match.params.id}/dishes/new`}>
                <Fab color="primary" className={classes.fab} aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </div>
    );
}