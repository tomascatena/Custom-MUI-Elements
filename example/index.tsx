import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomInput from '../src/custom-components/CustomInput/CustomInput';
import darkTheme from '../src/themes/darkTheme';

const App = () => {
  const [value, setValue] = React.useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        width: '30rem',
        margin: 'auto',
        mt: 5,
      }}
    >
      <CustomInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Password"
        helpText="Help text"
        type="password"
        placeholder="Enter a secure password"
        variant='standard'
        shouldShowCheckIcon
        error="This is an error"
        touched
        sx={{
          width: '100%',
        }}
      />

      <CustomInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Password"
        helpText="Help text"
        type="password"
        placeholder="Enter a secure password"
        variant='outlined'
        shouldShowCheckIcon
        error="This is an error"
        touched
        sx={{
          width: '100%',
        }}
      />

      <CustomInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Password"
        helpText="Help text"
        type="password"
        placeholder="Enter a secure password"
        variant='filled'
        shouldShowCheckIcon
        error="This is an error"
        touched
        sx={{
          width: '100%',
        }}
      />
    </Box>
  );
};

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
