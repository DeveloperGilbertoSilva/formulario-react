import {Step, StepLabel, Stepper, Typography} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validarCPF}) { // props possui a propriedade 'aoEnviar' e essa foi descontraída e passada por parâmetro
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if(etapaAtual === formulario.length - 1){
            aoEnviar(dadosColetados);
        }
    });

    const proximo = () => {
        setEtapaAtual(etapaAtual+1);
    }
    
    const coletarDados = (dados) => {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados}/>,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    return (<> 
        <Stepper activeStep={etapaAtual}>
            <Step>
                <StepLabel>Login</StepLabel>
            </Step>
            <Step>
                <StepLabel>Pessoal</StepLabel>
            </Step>
            <Step>
                <StepLabel>Entrega</StepLabel>
            </Step>
            <Step>
                <StepLabel>Finalização</StepLabel>
            </Step>
        </Stepper>
        {formulario[etapaAtual]} 
        </>);
}


export default FormularioCadastro;
