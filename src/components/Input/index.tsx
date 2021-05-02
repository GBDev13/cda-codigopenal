import { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { InputContainer } from './InputStyles';

import { BiErrorCircle } from 'react-icons/bi';

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, label, ...rest }: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error} = useField(name)

  const [value, setValue] = useState('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        return value
      },
      setValue: (newValue: string) => {
        setValue(newValue)
      },
      clearValue: () => {
        setValue('')
      },
    })
  }, [fieldName, registerField, value])

  return (
    <InputContainer hasValue={!!value} error={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        value={value}
        onChange={({target}) => setValue(target.value)}
        {...rest}
      />
      {error && <span><BiErrorCircle size={20} color="#c54c4c" />{error}</span>}
    </InputContainer>
  )
}