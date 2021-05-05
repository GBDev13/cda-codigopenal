import { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { TextareaContainer } from './TextareaStyles';

import { BiErrorCircle } from 'react-icons/bi';

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['textarea'] & Props

export default function Textarea({ name, label, ...rest }: InputProps) {

  const inputRef = useRef<HTMLTextAreaElement>(null)
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
    <TextareaContainer className="textarea" hasValue={!!inputRef.current?.value} error={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <textarea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={({target}) => setValue(target.value)}
        {...rest}
      ></textarea>
      {error && <span><BiErrorCircle size={20} color="#c54c4c" />{error}</span>}
    </TextareaContainer>
  )
}