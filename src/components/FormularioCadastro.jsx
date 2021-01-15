import {Typography} from '@material-ui/core';
import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validarCPF}) { // props possui a propriedade 'aoEnviar' e essa foi descontraída e passada por parâmetro
    const [etapaAtual, setEtapaAtual] = useState(0);

    const proximo = () => {
        setEtapaAtual(etapaAtual+1);
    }
    
    const formulario = [
        <DadosUsuario aoEnviar={proximo}/>,
        <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={aoEnviar}/>
    ];

    return (<> {
        formulario[etapaAtual]
    } </>);
}


export default FormularioCadastro;
