import React, { memo, useCallback, useEffect, useState } from 'react';
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
import { toggleResetando } from '../../store/filtros';

const ListaCodigos: React.FC = () => {
  const { modal, codigos, filtros } = useSelector((state): IState => state);
  const [newCodigos, setNewCodigos] = useState(codigos?.data);

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

  const aplicarFiltros = useCallback(() => {
    const filtrados = codigos?.data.filter
    (codigo => !filtros?.busca ? true :
      formatValue(String(codigo?.nome)).includes(formatValue(String(filtros?.busca))))

    .filter(codigo => Boolean(filtros?.status) === false ? true :
    codigo.statusDescricao === filtros?.status)

    switch (filtros?.ordem) {
      case 'multa-maior' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (Number(a.multa) > Number(b.multa)) ? -1 : 1)
      case 'multa-menor' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (Number(a.multa) < Number(b.multa)) ? -1 : 1)
      case 'prisao-maior' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (Number(a.tempoPrisao) > Number(b.tempoPrisao)) ? -1 : 1)
      case 'prisao-menor' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (Number(a.tempoPrisao) < Number(b.tempoPrisao)) ? -1 : 1)
      case 'data-maior' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (new Date(String(a.dataCriacao)) > new Date(String(b.dataCriacao))) ? -1 : 1)
      case 'data-menor' :
        return filtrados?.sort((a: ICodigo, b: ICodigo) => (new Date(String(a.dataCriacao)) < new Date(String(b.dataCriacao))) ? -1 : 1)
      default:
        return filtrados
    }
  }, [codigos?.data, filtros?.busca, filtros?.ordem, filtros?.status])

  useEffect(() => {
    setNewCodigos(aplicarFiltros());
  }, [aplicarFiltros, codigos?.data, filtros?.busca, filtros?.ordem, filtros?.status, setNewCodigos])

  const handleReset = useCallback(() => {
    dispatch(toggleResetando())
  }, [dispatch])

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
              <button type="button" className="filtros" onClick={handleReset}>
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

export default memo(ListaCodigos);