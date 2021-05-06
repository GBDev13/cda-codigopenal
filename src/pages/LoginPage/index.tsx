import * as S from './LoginStyles';
import Form from './Form';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../store/configureStore';

const LoginPage = () => {
  const { login } = useSelector((state:RootState) => state);

  const history = useHistory();

  if(login.data) history.push("/");

  return (
    <S.Container>
      <section className="content">
        <Logo />
        <div>
          <h1>Seja bem-vindo(a) Oficial</h1>
          <h2>faça seu login</h2>
        </div>

        <Form />
      </section>
      <section className="image">
        <div />
      </section>
    </S.Container>
  )
}

export default LoginPage;