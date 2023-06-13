import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];
