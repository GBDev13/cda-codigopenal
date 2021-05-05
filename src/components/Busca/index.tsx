import React, { useCallback, useState } from 'react';
import * as S from './BuscaStyles';
import ReactSelect from 'react-select'
import { setBusca, setOrdem, setStatus } from '../../store/filtros';
import { useDispatch } from 'react-redux';

const Busca: React.FC = () => {
  const [buscaInput, setBuscaInput] = useState('');

  const [filtro, setFiltro] = useState('');
  const [ordemInput, setOrdemInput] = useState('');

  interface FiltroProps {
    value: string | boolean;
    label: string;
    disabled?: true | false;  
  }

  interface OrdemProps {
    value: string;
    label: string;
    disabled?: true | false;  
  }

  const filtros: FiltroProps[] = [
    {
      value: false,
      label: "Filtrar por...",
      disabled: true,
    },
    {
      value: 'Ativo',
      label: "Ativos"
    },
    {
      value: 'Inativo',
      label: "Inativos"
    },
  ]

  const ordens: OrdemProps[] = [
    {
      value: '',
      label: "Ordenar por...",
      disabled: true,
    },
    {
      value: 'multa-maior',
      label: "Valor da multa (Maior)"
    },
    {
      value: 'multa-menor',
      label: "Valor da multa (Menor)"
    },
  ]

  const customStyles = {
    option: (styles: any, state: { isSelected: any; isFocused: any; }) => ({
      ...styles,
      borderBottom: '1px solid #656565',
      color: state.isSelected ? '#f9b036' : '#ffecac',
      padding: 20,
      backgroundColor: state.isFocused ? '#262623' : '#353532',
      transition: '1s',
      cursor: 'pointer',
    }),
    noOptionsMessage: (styles: any) => ({
      ...styles,
      color: '#f9b036',
      backgroundColor: '#353532',
    }),
    control: (styles: any, state: { isFocused: any; }) => ({
      ...styles,
      height: '100%',
      backgroundColor: '#1D1D1B',
      border: 'none',
      borderRadius: '.4rem',
      padding: '1.3rem 1rem',
      boxShadow: state.isFocused ? '0px 0px 0px 1px #f9b036' : 'none',
    }),
    input: (styles: any) => ({
      ...styles,
      color: '#f9b036',
      fontSize: '1.5rem',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: '#f9b036',
      fontSize: '1.5rem',
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: '#f9b036',
      fontSize: '1.5rem',
    }),
    menu: (styles: any) => ({
      ...styles,
      margin: '0',
      padding: '0',
    }),
    menuList: (styles: any) => ({
      ...styles,
      padding: '0',
    }),
  }

  const dispatch = useDispatch();

  const handleBusca = useCallback(({ target }) => {
    setBuscaInput(target.value)
    dispatch(setBusca(target.value))
  }, [dispatch])

  const handleFiltrar = useCallback((option) => {
    setFiltro(String(option?.value))
    dispatch(setStatus(option?.value))
  }, [dispatch])

  const handleOrdenar = useCallback((option) => {
    setOrdemInput(String(option?.value))
    dispatch(setOrdem(option?.value))
  }, [dispatch])

  return (
    <S.Container>
      <div>
        <input type="text" placeholder="Buscar..." value={buscaInput} onChange={handleBusca}/>
        <ReactSelect
          styles={customStyles}
          options={filtros}
          name="filtro"
          value={filtros.filter(obj => obj.value === filtro)}
          onChange={handleFiltrar}
          placeholder="Filtrar por..."
          noOptionsMessage={() => "Sem resultados"}
        />
        <ReactSelect
          styles={customStyles}
          options={ordens}
          name="ordem"
          value={ordens.filter(obj => obj.value === ordemInput)}
          onChange={handleOrdenar}
          placeholder="Ordenar por..."
          noOptionsMessage={() => "Sem resultados"}
        />
      </div>
    </S.Container>
  )
}

export default Busca;