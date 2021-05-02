import * as S from './LoginStyles';
import Form from './Form';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const LoginPage: React.FC = () => {

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