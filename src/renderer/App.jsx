import '@mantine/core/styles.css';
import './global.css';
import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core';
import { HashRouter, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  primaryColor: 'indigo',
});

const App = () => (
  <>
    <ColorSchemeScript defaultColorScheme="light" />
    <MantineProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </HashRouter>
    </MantineProvider>
  </>
);

export default App;
