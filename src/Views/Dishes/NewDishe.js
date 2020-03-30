import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core/';
import Header from '../../Components/Header/Header';
import SubHeader from '../../Components/SubHeader/SubHeader';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        textAlign: 'left'
    },

    button: {
        '&:hover': {
            backgroundColor: 'rgb(255, 202, 40)',
        },
        backgroundColor: '#ffc107',
        color: 'black',
        width: '100%'
    }
}));

export default function Dishes(props) {
    const classes = useStyles();
    const [placeName, setPlaceName] = useState('');
    const [disheForm, setDisheForm] = useState({ name: '', price: '', description: '' });

    const restServiceDishes = new RestService(`/api/places/${props.match.params.id}/dishes`);
    const restServicePlaces = new RestService(`/api/places/${props.match.params.id}`);

    useEffect(() => {
        getPlace();
    }, []);

    const changeFieldForm = e => {
        setDisheForm({
            ...disheForm,
            [e.target.id]: e.target.value
        });
    };

    const createDishe = () => {
        restServiceDishes.post(disheForm, (success) => {
            alert(success.message);
            setDisheForm({ name: '', price: '', description: '' });
        }, (error) => {
            console.log(error);
        });
    };

    const getPlace = () => {
        restServicePlaces.get((success) => {
            if (success.length > 0) {
                setPlaceName(success[0].name);
            }
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <Header showBack />
            <Container maxWidth="xs">
                <SubHeader title={placeName} />
                <form>
                    <div>
                        <label>Nome do prato</label>
                        <input type="text" id="name"
                            value={disheForm.name}
                            placeholder="   Prato"
                            onChange={(e) => { changeFieldForm(e) }} />
                    </div>
                    <div>
                        <label>Valor</label>
                        <input type="text" id="price"
                            value={disheForm.price}
                            placeholder="   R$0,00"
                            onChange={(e) => { changeFieldForm(e) }} />
                    </div>
                    <div>
                        <label>Descrição do prato</label>
                        <textarea rows="10" id="description"
                            maxLength="200"
                            value={disheForm.description} placeholder="  Insira uma descrição"
                            onChange={(e) => { changeFieldForm(e) }} />
                        <p>*A descrição deve conter até 200 caracteres.</p>
                    </div>
                    <br />
                    <Button variant="contained" disableElevation className={classes.button} onClick={() => { createDishe() }}>
                        Salvar
                    </Button>
                </form>
            </Container>
        </div >
    );
}