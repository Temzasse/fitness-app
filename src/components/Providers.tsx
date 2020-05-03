import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as OvermindProvider } from 'overmind-react';
import { createOvermind } from 'overmind';
import { theme } from '../utils/theme';
import { config } from '../models';

const overmind = createOvermind(config);

const Providers: React.FC = ({ children }) => {
  return (
    <OvermindProvider value={overmind}>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </OvermindProvider>
  );
};

export default Providers;
