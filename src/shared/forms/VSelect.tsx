import { useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';


type TVSelectProps = TextFieldProps & {
  name: string;
}
export const VSelect: React.FC<TVSelectProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  const [value, setValue] = useState(defaultValue || '');


  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);


  return (
    <TextField
      {...rest}

      select
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}

      value={value || ''}
      onKeyDown={e => { error && clearError(); rest.onKeyDown?.(e); }}
      onChange={e => { setValue(e.target.value); rest.onChange?.(e); }}
    />
  );
};
