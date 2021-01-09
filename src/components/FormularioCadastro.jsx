import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro() {
    const [nome, setNome] = useState("Gilberto");
    const [sobrenome, setSobrenome] = useState("");
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome);
        }}>
            <TextField 
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if(tmpNome.length >= 3){
                        tmpNome = tmpNome.substr(0,3);
                    }

                    setNome(tmpNome);
                }}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <TextField 
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <FormControlLabel 
                control={
                    <Switch
                        name="promocoes"
                        defaultChecked
                        color="primary"
                    />
                }
                label="Promoções"/>
            <FormControlLabel 
                control={
                    <Switch
                        name="promocoes"
                        defaultChecked
                        color="primary"
                    />
                }
                label="Novidades"/>


            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
