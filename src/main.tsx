import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom';

import App from './App';
import { theme } from './utils/customMui';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
