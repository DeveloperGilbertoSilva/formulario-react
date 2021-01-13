import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validarCPF}) { // props possui a propriedade 'aoEnviar' e essa foi descontraída e passada por parâmetro
    
    
    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    );
}

export default FormularioCadastro;
