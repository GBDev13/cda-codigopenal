import { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from './LoginStyles'
import Input from '../../components/Input'
import * as Yup from 'yup';

interface FormData {
  name: string
  email: string
}
export default function MyForm() {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)

    // try {
    //   const schema = Yup.object().shape({
    //     usuario: Yup.string().required(),
    //   });
    //   await schema.validate(data, {
    //     abortEarly: false,
    //   });
    //   // Validation passed
    //   console.log('passou', data);
    // } catch (err) {
      
    //   const validationErrors = {} as Yup.ValidationError
    //   if (err instanceof Yup.ValidationError) {

    //     err.inner.forEach(error => {
    //       if(!error.path) return;
    //       validationErrors[error.path] = error.message;
    //     });
    //     formRef.current?.setErrors(validationErrors);
    // }
    // }

  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="usuario" label="Usuário" />
      <Input name="senha" label="Senha" type="password" />
      <button>enviar</button>
    </Form>
  )
}