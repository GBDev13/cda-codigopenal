import * as S from './HeaderStyles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <S.HeaderContainer>
      <div>
        <Logo />
        <h3>Tenha um ótimo dia<br />oficial <span>Gabriel Borges</span></h3>
      </div>
    </S.HeaderContainer>
  )
}
