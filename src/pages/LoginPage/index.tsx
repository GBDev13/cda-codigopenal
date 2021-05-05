import * as S from './LoginStyles';
import Form from './Form';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { IState } from '../../store/types';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { login } = useSelector((state): IState => state);

  const history = useHistory();

  if(login?.data) history.push("/");

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