import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';
import { Dashobard } from './src/screens/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashobard />
    </ThemeProvider>
  );
}

export default App;
