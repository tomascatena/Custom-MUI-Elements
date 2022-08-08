import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from '../src/themes/darkTheme';
import lightTheme from '../src/themes/lightTheme';
import { Box, ThemeProvider } from '@mui/material';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121212',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
};

export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'lightning',
      items: ['dark', 'light'],
      showName: true,
    },
  },
};

const withMUIThemeProvider = (Story, context) => {
  const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Box sx={{
          backgroundColor: theme.palette.background.default,
          padding: 3,
        }}>
          <Story {...context} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export const decorators = [
  withMUIThemeProvider
];