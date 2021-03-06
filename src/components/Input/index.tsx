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

  const [value, setValue] = useState<boolean | string>();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value: string) => {
        ref.current.value = value
        setValue(value)
      },
      clearValue: ref => {
        ref.current.value = ''
        setValue('')
      },
    })
  }, [fieldName, registerField])

  useEffect(() => {
    setValue(!!inputRef.current?.value)
  }, [value])

  return (
    <InputContainer hasValue={!!value} error={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={({target}) => setValue(target.value)}
        {...rest}
      />
      {error && <span><BiErrorCircle size={20} color="#c54c4c" />{error}</span>}
    </InputContainer>
  )
}