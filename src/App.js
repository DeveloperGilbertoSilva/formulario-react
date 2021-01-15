import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

function App() {
    const aoEnviarForm = (dados) => {
        console.log(dados);
    };

    const validarCPF = (cpf) => {
        if(cpf.length !== 11){
            return {valido: false, texto:"CPF deve ter 11 dígitos"};
        } else{
            return {valido: true, texto:""};
        }
    };

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">Formulário Cadastro</Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
        </Container>
    );
}

export default App;
