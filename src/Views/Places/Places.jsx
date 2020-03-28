import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SubHeader from '../../Components/SubHeader/SubHeader.jsx';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/CardPlace.jsx';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        textAlign: 'left'
    },

    div_list: {
        width: '100%'
    },

    linha: {
        width: '85%',
        display: 'inline-block'
    },

    linha2: {
        width: '15%',
        display: 'inline-block'
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
    },

    button: {
        color: 'white',
        fontSize: '40pt'
    },

    div_add: {
        height: '100%'
    }
}));

export default function Places(props) {
    const classes = useStyles();
    const [places, setPlaces] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const [message, setMessage] = useState(
        <div className={classes.loading}>
            <CircularProgress color="secondary" />
            <span>CARREGANDO LUGARES...</span>
        </div>);

    useEffect(() => {
        listPlaces();
    }, []);

    const restService = new RestService('/api/places');

    const listPlaces = () => {
        restService.get((success) => {
            if (success.places.length > 0) {
                setSubtitle(success.places.length + ' lugares cadastrados');
                setPlaces(success.places);
            } else {
                setMessage(<div style={{ color: 'white' }}>NÃO EXISTEM LUGARES PARA EXIBIR</div>);
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
                    places.length > 0 ?
                        places.map(prop => (
                            <div key={prop.id} className={classes.div_list}>
                                <span className={classes.linha}>
                                    <Link to={`places/${prop.id}/dishes`}>
                                        <Card prop={prop} />
                                    </Link>
                                </span>
                                <span className={classes.linha2}>
                                    <Link to={`places/${prop.id}/dishes/new`}>
                                        <IconButton aria-label="add">
                                            <AddCircle className={classes.button} />
                                        </IconButton>
                                    </Link>
                                </span>
                            </div>
                        ))
                        : message
                }
            </Container>
        </div>
    );
}