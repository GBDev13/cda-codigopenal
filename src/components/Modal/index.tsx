import * as S from './ModalStyles';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/types';
import { useCallback, useRef } from 'react';
import { fecharEdicao, fecharModal, setCurrentItem } from '../../store/modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FormHandles, SubmitHandler } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from 'yup';
import Input from '../Input';
import Textarea from '../Textarea';
import Select from '../Select';
import { criarCodigo, editarCodigo } from '../../store/codigos';
import Loading from '../Loading';

interface FormData {
  nome: string;
  status: number;
  descricao: string;
  tempoPrisao: number;
  multa: number;
}

function MyModal() {
  Modal.setAppElement('#root')
  const { modal, codigos } = useSelector((state): IState => state);
  const isOpen = modal?.isOpen || false;

  const current = modal?.currentItem;

  const initial = {
    descricao: current?.descricao,
    multa: current?.multa,
    nome: current?.nome,
    status: current?.status,
    tempoPrisao: current?.tempoPrisao,
  }

  const dispatch = useDispatch();

  const modalFormRef = useRef<FormHandles>(null)

  const handleClose = useCallback(() => {
    dispatch(fecharModal())
    dispatch(fecharEdicao())
    dispatch(setCurrentItem({}))
  }, [dispatch])

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    modalFormRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('Esse campo é obrigatório'),
        status: Yup.number().required('Esse campo é obrigatório'),
        descricao: Yup.string().required('Esse campo é obrigatório'),
        tempoPrisao: Yup.number().typeError('Esse campo só aceita números').required('Esse campo é obrigatório'),
        multa: Yup.number().typeError('Esse campo só aceita números').required('Esse campo é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      if(modal?.isEdditing) {
        dispatch(editarCodigo(data, modal?.currentItem.id));
      }

      if(!modal?.isEdditing) {
        dispatch(criarCodigo(data));
      }

      reset()
    } catch (err) {
      
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err)
        modalFormRef.current?.setErrors(validationErrors);
    }
    }
  }

  return (
    <S.Container
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: {
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(29, 29, 27, 0.7)'
        }
      }}
    >
      <S.TopoModal>
        {modal?.isEdditing ? 'Editar código' : 'Adicionar um novo código'}
        <AiOutlineCloseCircle color="#f9b036" size={30} onClick={handleClose}/>
      </S.TopoModal>

      <S.FormContainer ref={modalFormRef} onSubmit={handleSubmit} initialData={initial}> 
        <Input name="nome" label="Nome" />
        <Select name="status" placeholder="Status" />
        <Textarea name="descricao" label="Descrição" />
        <Input name="tempoPrisao" label="Tempo de prisão" type="number"/>
        <Input name="multa" label="Valor da multa" type="number"/>
      </S.FormContainer>
      
      <button onClick={() => modalFormRef.current?.submitForm()}>
        {codigos?.loading ? <Loading /> : modal?.isEdditing ? 'Confirmar edição' : 'Confirmar criação'}
      </button>
    </S.Container>
  );
};

export default MyModal;
