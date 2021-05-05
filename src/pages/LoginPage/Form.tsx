import { useEffect, useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from './LoginStyles'
import Input from '../../components/Input'
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/login';
import Loading from '../../components/Loading';
import { useToasts } from 'react-toast-notifications';
import { IState } from '../../store/types';

interface FormData {
  usuario: string
  senha: string
}
export default function MyForm() {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        usuario: Yup.string().required('Esse campo é obrigatório'),
        senha: Yup.string().required('Esse campo é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      
     dispatch(fetchUser({usuario: data.usuario, senha: data.senha}))
    } catch (err) {
      
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err)
        formRef.current?.setErrors(validationErrors);
    }
    }
  }

  const { login } = useSelector((state): IState => state);
  const { addToast } = useToasts();

  const dispatch = useDispatch();

  useEffect(() => {
    if(login?.error) {
      addToast(login?.error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, login?.error])

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="usuario" label="Usuário" />
      <Input name="senha" label="Senha" type="password" />
      <button>
        {login?.loading ? <Loading /> : 'entrar'}
      </button>
    </Form>
  )
}