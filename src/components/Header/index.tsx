import * as S from './HeaderStyles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { IState } from '../../store/types';

export default function Header() {
  const { login } = useSelector((state): IState => state);
  return (
    <S.HeaderContainer>
      <div>
        <Logo />
        <h3>Tenha um ótimo dia<br />oficial <span>{login?.data?.nome}</span></h3>
      </div>
    </S.HeaderContainer>
  )
}
