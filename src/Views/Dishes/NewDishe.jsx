import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core/';
import SubHeader from '../../Components/SubHeader/SubHeader.jsx';
import RestService from '../../Services/RestService';

const useStyles = makeStyles(theme => ({
    root: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        '& input, textarea, div, form': {
            width: '100%'
        },
        textAlign: 'left'
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
        '&:hover': {
            backgroundColor: 'white',
        },
        backgroundColor: '#ffc107',
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
        padding: '5px 15px 5px 15px'
    }
}));

export default function Dishes(props) {
    const classes = useStyles();
    const [places, setPlaces] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const [disheForm, setDisheForm] = useState({ name: '', price: 'R$0,00', description: '' });

    const restService = new RestService(`api/places/${props.match.params.id}/dishes`);

    const changeFieldForm = e => {
        setDisheForm({
            ...disheForm,
            [e.target.id]: e.target.value
        });
    };

    const createDishe = () => {
        restService.post(disheForm, (success) => {
            alert('Prato cadastrado com sucesso!');
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <Container maxWidth="xs">
                <SubHeader title="Cadastrar" />
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
                        SALVAR
                    </Button>
                </form>
            </Container>
        </div >
    );
}