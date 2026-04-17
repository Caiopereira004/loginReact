import './styles/theme.css';
import './styles/global.css';

import { Container } from "./components/Container/Container";
import { MainForm } from "./components/MainForm/MainForm";
import { DefaultInput } from "./components/DefaultInput/DefaultInput";
import {DefaultButton} from "./components/DefaultButton/DefaultButton";

import { Mail, Lock } from  'lucide-react';

function App(){
  return(
    <Container>
      <MainForm>
        <form>
          <h1>Login</h1>

          <DefaultInput icon={Mail} placeholder="Email" />
          <DefaultInput icon={Lock} type="password" placeholder="Senha" />
          <DefaultButton type="submit">Entrar</DefaultButton>
        </form>
      </MainForm>
    </Container>
  )
}

export default App;