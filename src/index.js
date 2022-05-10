import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import theme from './theme';

import App from './App';
import Components1 from './components1';
import Components2 from './components2';
import Calculator from './calculator';
import Optimization from './optimization-final';
import StateAndProps from './state-and-props';
import ParamSample from './param-sample';

import { store } from './redux-state/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// StrictMode deactivated because it causes extra refreshes in dev mode
// - for the purpose of observing redux behavior this is
// rather disturbing.
root.render(
  //<StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="components1" element={<Components1 />} />
            <Route path="components2" element={<Components2 />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="optimization" element={<Optimization />} />
            <Route path="state-and-props" element={<StateAndProps />} />
            <Route path="param" element={<ParamSample />}>
              <Route path=":value" element={<ParamSample />} />
            </Route>
            <Route
              index
              element={<Box>Please navigate using the toolbar above.</Box>}
            />
            <Route path="*" element={<Box>This URL is unknown.</Box>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  //</StrictMode>,
);
