import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './pages/styles/global';
import theme from './pages/styles/theme';

import { SignIn } from './pages/SignIn';
import { SignOn } from './pages/SignOn';

import { HomeAdmin } from './pages/Admin/HomeAdmin';
import { DishViewAdmin } from './pages/Admin/DishViewAdmin';
import { CreateDish } from './pages/Admin/CreateDish';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
