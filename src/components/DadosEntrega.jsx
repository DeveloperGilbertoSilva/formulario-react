import {Button, TextField} from '@material-ui/core';
import React from 'react';

function DadosEntrega() {
    return (
        <form>
            <TextField id="cep" label="CEP" type="number" variant="outlined" margin="normal" required/>
            <TextField id="endereco" label="Endereço" type="text" variant="outlined" margin="normal" required fullWidth/>
            <TextField id="number" label="Número" type="number" variant="outlined" margin="normal" required />
            <TextField id="estado" label="Estado" type="estado" variant="outlined" margin="normal" required />
            <TextField id="cidade" label="Cidade" type="cidade" variant="outlined" margin="normal" required />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;
