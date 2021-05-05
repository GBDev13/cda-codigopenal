import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import * as S from './ListaCodigosStyles';

import { HiPlus } from 'react-icons/hi';
import Busca from '../../components/Busca';
import CodigoCard from '../../components/CodigoCard';
import { useDispatch, useSelector } from 'react-redux';
import { abrirModal } from '../../store/modal';
import Modal from '../../components/Modal';
import { ICodigo, IState } from '../../store/types';
import { carregarCodigos } from '../../store/codigos';
import Loading from '../../components/Loading';
import ModalConfirmacao from '../../components/Modal/ModalConfirmação';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const ListaCodigos: React.FC = () => {
  const { modal, codigos, filtros } = useSelector((state): IState => state);
  const [newCodigos, setNewCodigos] = useState(codigos?.data);

  const [ordem, setOrdem] = useState('');

  useEffect(() => {
    setOrdem(String(filtros?.ordem))
  }, [filtros?.ordem])

  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(abrirModal())
  }, [dispatch])

  useEffect(() => {
    dispatch(carregarCodigos())
  }, [dispatch])

  function formatValue(value: string) {
    return value.toLocaleLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  const ordenar = useCallback((state) => {
    switch (ordem) {
      case 'multa-maior' :
        console.log('PASSO 2 - chegou aqui MAIOR')
        return state.sort((a: ICodigo, b: ICodigo) => (Number(a.multa) < Number(b.multa)) ? -1 : 1)
      case 'multa-menor' :
        console.log('PASSO 1 - chegou aqui MENOR')
        return state.sort((a: ICodigo, b: ICodigo) => (Number(a.multa) > Number(b.multa)) ? -1 : 1)
      default:
        console.log('PASSO 1 - chegou aqui DEFAULT')
        return state
    }
  }, [ordem])

  useEffect(() => {
    setNewCodigos(
      codigos?.data.filter
      (codigo => !filtros?.busca ? true :
        formatValue(String(codigo?.nome)).includes(formatValue(String(filtros?.busca))))
      .filter(codigo => Boolean(filtros?.status) === false ? true :
      codigo.statusDescricao === filtros?.status)
      );
  }, [codigos?.data, filtros?.busca, filtros?.status, setNewCodigos])

  useEffect(() => {
    console.log('PASSO 3 - vou definir a array')
    setNewCodigos((oldState) => ordenar(oldState))
  }, [ordem, ordenar])

  return (
    <>
      {modal?.isOpen && <Modal />}
      {modal?.isConfirmationOpen && <ModalConfirmacao />}
      <Header />
      <S.Container>
        <S.Topo>
          <h2>Listagem de códigos penais</h2>
          
          <div>
            {codigos?.loading && <Loading />}
            {(filtros?.status || filtros?.ordem || filtros?.busca) && (
              <button type="button" className="filtros">
                <IoIosRemoveCircleOutline color="#fff" />
                remover filtros
              </button>
            )}
            <button type="button" className="adicionar" onClick={openModal}>
            <HiPlus color="#ffecac" />
            Adicionar novo código
            </button>
          </div>
        </S.Topo>

        <Busca />

        <S.CardGrid>

          {codigos?.error && <h1>error</h1>}

          {newCodigos?.map((codigo: ICodigo) => (
            <CodigoCard key={`${codigo.nome}-${codigo.id}`} dados={codigo} />
          ))}

          {!newCodigos?.length && !codigos?.loading && <S.NoResults>Não foi possível encontrar resultados com os filtros atuais.</S.NoResults>}
        </S.CardGrid>
      </S.Container>
    </>
  )
}

export default ListaCodigos;