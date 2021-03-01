import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './utils/datasource'
import { ChakraProvider } from "@chakra-ui/react"

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <ChakraProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <AppRouter />
      </Router>
    </Provider>
    </ChakraProvider>
  );
}

export default App;
