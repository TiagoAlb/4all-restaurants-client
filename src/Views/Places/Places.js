import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SubHeader from '../../Components/SubHeader/SubHeader';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/CardPlace';
import LinkedInCard from '../../Components/LinkedInCard/LinkedInCard';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        overflow: 'hidden'
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
            if (success.length > 0) {
                setSubtitle(success.length + ' lugares cadastrados');
                setPlaces(success);
            } else {
                setSubtitle('Não existem lugares cadastrados');
                setMessage('');
            }
        },
            (error) => {
                alert(error);
            });
    };

    return (
        <div className={classes.root}>
            <Header />
            <Container maxWidth="xl">
                <SubHeader title="Lugares" subtitle={subtitle} />
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
                <div className="linkedin"><LinkedInCard /></div>
            </Container>
        </div>
    );
}