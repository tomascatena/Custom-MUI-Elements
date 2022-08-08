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
  /**
   * The label for the input
   */
  label: string;
  /**
   * The help text for the input
   */
  helpText: string;
  /**
   * The type of the input (text, password or email)
   */
  type: 'text' | 'password' | 'email';
  /**
   * The variant of the input (standard, outlined or filled)
   */
  variant?: 'standard' | 'outlined' | 'filled';
  /**
   * The value of the input
   */
  value: string;
  /**
   * The placeholder for the input
   */
  placeholder: string;
  /**
   * The styles for the input
   */
  sx?: SxProps;
  /**
   * Whether to show the check icon or not
   */
  shouldShowCheckIcon?: boolean;
  /**
   * The error message for the input
   */
  error?: string;
  /**
   * Whether the input has been touched or not
   */
  touched?: boolean;
  /**
   * Whether the input is required or not
   */
  required?: boolean;
  /**
   * Whether the input is disabled or not
   */
  disabled?: boolean;
  /**
   * The onBlur handler for the input
   */
  onBlur?: () => void;
  /**
   * The onChange handler for the input
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Primary UI component for user interaction
 */
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
  required,
  disabled,
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
          required={!!required}
          disabled={!!disabled}
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
          required={!!required}
          disabled={!!disabled}
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
          required={!!required}
          disabled={!!disabled}
          onChange={onChange}
          onBlur={onBlur}
        />

        <FormHelperText>{hasError ? error : helpText}</FormHelperText>
      </FormControl>
    );
  }
};

export default CustomInput;