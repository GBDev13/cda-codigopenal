import * as S from './HeaderStyles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export default function Header() {
  const { login } = useSelector((state: RootState) => state);
  return (
    <S.HeaderContainer>
      <div>
        <Logo />
        <h3>Tenha um ótimo dia<br />oficial <span>{login.data.nome || 'Fulano'}</span></h3>
      </div>
    </S.HeaderContainer>
  )
}
