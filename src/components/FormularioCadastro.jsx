import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}) { // props possui a propriedade 'aoEnviar' e essa foi descontraída e passada por parâmetro
    const [nome, setNome] = useState("Gilberto");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf: {valido: true, texto:""}});
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }}>
            <TextField 
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
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
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const eValido = validarCPF(cpf);
                    setErros({cpf:eValido});
                }}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <FormControlLabel 
                control={
                    <Switch
                        checked={promocoes}
                        onChange = {(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"/>
            <FormControlLabel 
                control={
                    <Switch
                        checked={novidades}
                        onChange = {(event) => {
                            setNovidades(event.target.checked); 
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"/>


            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
