import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import SubHeader from '../../Components/SubHeader/SubHeader';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '../../Components/Card/CardDish';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        overflow: 'hidden'
    },

    fab: {
        '&:hover': {
            backgroundColor: 'rgb(255, 202, 40)',
        },
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
    const [placeName, setPlaceName] = useState('');
    const [subTitle, setSubTitle] = useState('Não existem pratos cadastrados');
    const [message, setMessage] = useState(
        <div className={classes.loading}>
            <CircularProgress color="secondary" />
            <span>CARREGANDO PRATOS...</span>
        </div>
    );

    useEffect(() => {
        listDishes();
    }, []);

    useEffect(() => {
        getPlace();
    }, []);

    const restServiceDishes = new RestService(`/api/places/${props.match.params.id}/dishes`);
    const restServicePlaces = new RestService(`/api/places/${props.match.params.id}`);

    const listDishes = () => {
        restServiceDishes.get((success) => {
            if (success.length > 0) {
                setDishes(success);
            } else {
                setMessage('');
            }
        }, (error) => {
            alert(error);
        });
    };

    const getPlace = () => {
        restServicePlaces.get((success) => {
            if (success.length > 0) {
                setPlaceName(success[0].name);
                const count = success[0].dishes_count;
                if (count > 0)
                    if (count > 1)
                        setSubTitle(count + ' pratos cadastrados');
                    else
                        setSubTitle(count + ' prato cadastrado');
            }
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <Header showBack />
            <Container maxWidth="xl">
                <SubHeader title={placeName} subtitle={subTitle} />
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