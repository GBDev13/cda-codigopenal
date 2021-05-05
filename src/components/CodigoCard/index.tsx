import * as S from './CodigoCardStyles';

import { FaEdit } from 'react-icons/fa';
import { CgRemove } from 'react-icons/cg';
import { ICodigo } from '../../store/types';
import { memo, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { abrirEdicao, abrirModal, abrirModalConfirmação, setCurrentItem } from '../../store/modal';

interface CodigoProps {
  dados: ICodigo;
}

const CodigoCard = ({ dados }: CodigoProps) => {
  const dispatch = useDispatch();

  const remover = useCallback(async () => {
    dispatch(abrirModalConfirmação())
    dispatch(setCurrentItem(dados))
  }, [dispatch, dados])

  const editar = useCallback(async () => {
    dispatch(abrirEdicao())
    dispatch(abrirModal())
    dispatch(setCurrentItem(dados))
  }, [dispatch, dados])

  return (
    <S.CardContainer>
      <div>
        <div>
          <section>
            <strong>
              {dados.nome}
              <span className={dados.statusDescricao}>{dados.statusDescricao}</span>
            </strong>
            <p className="date">{dados.dataFormatada}</p>
          </section>
          <p>{dados.descricao}</p>
        </div>
        <ul>
          <li>
            {!!dados.multa ? <p><b>Multa:</b> R$ {dados.multa}</p> : <p><b>Sem multa</b></p>}
          </li>
          <li>
            {!!dados.tempoPrisao ? <p><b>Tempo de prisão:</b> {dados.tempoPrisao} anos</p> : <p><b>Sem prisão</b></p>}
          </li>
        </ul>
      </div>
      <div className="footer">
        <div>
          <button type="button" onClick={editar}>
            <FaEdit color="#ffecac" size={30}/>
            Editar
          </button>
          <div className="separador" />
          <button type="button" onClick={remover}>
            <CgRemove color="#ffecac" size={30}/>
            Remover
          </button>
        </div>
      </div>
    </S.CardContainer>
  )
}

export default memo(CodigoCard);