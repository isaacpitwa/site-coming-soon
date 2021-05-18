import React from 'react';
import { Switch } from 'react-router-dom';

import { MainLayout } from './layout';
import * as ROUTES from './utils/constants/routes';
import { Box } from '@chakra-ui/react';
import { Home } from './views';


const AppRouter = () => {
  return (
    <Switch>
      <Box
        component={Home}
        path={ROUTES.LANDING}
        layout={MainLayout}  exact/>
    </Switch>
  );
}

export default AppRouter;
