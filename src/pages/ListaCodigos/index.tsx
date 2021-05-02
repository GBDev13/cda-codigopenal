import React from 'react';
import Header from '../../components/Header';
import * as S from './ListaCodigosStyles';

import { HiPlus } from 'react-icons/hi';

const ListaCodigos: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Topo>
          <h2>Listagem de códigos penais</h2>
          <button type="button">
          <HiPlus color="#ffecac" />
          Adicionar novo código
          </button>
        </S.Topo>
      </S.Container>
    </>
  )
}

export default ListaCodigos;