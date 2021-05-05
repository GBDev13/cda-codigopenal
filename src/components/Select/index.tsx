import { useRef, useEffect, useState } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { customStyles, SelectContainer } from './SelectStyles';
import { BiErrorCircle } from 'react-icons/bi';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

interface FiltroProps {
  value: number;
  label: string;
  disabled?: true | false;  
}

export default function Select({ name, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [value, setValue] = useState<any>();

  const options: FiltroProps[] = [
    {
      value: 0,
      label: "Selecione um status",
      disabled: true,
    },
    {
      value: 1,
      label: "Ativo"
    },
    {
      value: 2,
      label: "Inativo"
    }
  ]

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          setValue(ref.state.value.map((option: OptionTypeBase) => option.value))
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          setValue('')
          return '';
        }
        setValue(ref.state.value.value)
        return ref.state.value.value;
      },
      clearValue: (ref: any) => {
        ref.select.clearValue();
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  const defaultOption = options.findIndex(option => option.value === defaultValue)

  useEffect(() => {
    defaultValue && setValue(defaultOption)
  }, [defaultOption, defaultValue])

  return (
    <SelectContainer hasValue={!!value} error={!!error}>
      <ReactSelect
        defaultValue={options[defaultOption]}
        ref={selectRef}
        styles={customStyles}
        classNamePrefix="react-select"
        options={options}
        isOptionDisabled={(option) => option.disabled}
        onChange={(option) => setValue(option)}
        {...rest}
        noOptionsMessage={() => "Sem resultados"}
      />
      {error && <span><BiErrorCircle size={20} color="#c54c4c" />{error}</span>}
    </SelectContainer>
  );
};