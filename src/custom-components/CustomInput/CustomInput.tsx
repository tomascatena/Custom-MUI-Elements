import React from 'react';
import {
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  SxProps
} from '@mui/material';
import { useShowPassword } from '../../hooks/useShowPassword';
import EndAdornment from '../EndAdornment/EndAdornment';

type Props = {
  label: string;
  helpText: string;
  type: 'text' | 'password' | 'email';
  variant?: 'standard' | 'outlined' | 'filled';
  value: string;
  placeholder: string;
  sx?: SxProps;
  shouldShowCheckIcon?: boolean;
  error?: string;
  touched?: boolean;
  onBlur?: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({
  label,
  helpText,
  type,
  variant,
  value,
  placeholder,
  sx,
  shouldShowCheckIcon,
  error,
  touched,
  onChange,
  onBlur
}: Props) => {
  const {
    showPassword,
    inputType,
    setShowPassword,
  } = useShowPassword(type);

  const hasError = !!(error && touched);

  const endAdornment = (
    <EndAdornment
      shouldShowCheckIcon={shouldShowCheckIcon}
      hasError={hasError}
      type={type}
      setShowPassword={setShowPassword}
      showPassword={showPassword}
    />
  );

  if (variant === 'standard') {
    return (
      <FormControl
        variant="standard"
        sx={sx}
        error={hasError}
      >
        <InputLabel>{label}</InputLabel>

        <Input
          type={inputType}
          placeholder={placeholder}
          value={value}
          endAdornment={endAdornment}
          onChange={onChange}
          onBlur={onBlur}
        />

        <FormHelperText>{hasError ? error : helpText}</FormHelperText>
      </FormControl>
    );
  } else if (variant === 'outlined') {
    return (
      <FormControl
        sx={sx}
        error={hasError}
      >
        <InputLabel>{label}</InputLabel>

        <OutlinedInput
          type={inputType}
          placeholder={placeholder}
          value={value}
          label={label}
          endAdornment={endAdornment}
          onChange={onChange}
          onBlur={onBlur}
        />

        <FormHelperText>{hasError ? error : helpText}</FormHelperText>
      </FormControl>
    );
  } else {
    return (
      <FormControl
        variant="filled"
        sx={sx}
        error={hasError}
      >
        <InputLabel>{label}</InputLabel>

        <FilledInput
          type={inputType}
          placeholder={placeholder}
          value={value}
          endAdornment={endAdornment}
          onChange={onChange}
          onBlur={onBlur}
        />

        <FormHelperText>{hasError ? error : helpText}</FormHelperText>
      </FormControl>
    );
  }
};

export default CustomInput;