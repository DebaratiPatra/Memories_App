import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers';
import App from './App';
import './index.css';

const theme = createTheme();
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="300357691659-4ohj54qan54bf8ff7viv2q8s26f7jn3k.apps.googleusercontent.com">
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <StylesThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </StylesThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </GoogleOAuthProvider>
);
