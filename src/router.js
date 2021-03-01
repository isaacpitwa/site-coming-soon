import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { MainLayout } from './layout';
import { Home,RightPath } from './views';
import * as ROUTES from './utils/constants/routes';
import { Box } from '@chakra-ui/react';


const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        path={ROUTES.LANDING}
        layout={MainLayout}  exact/>
        <RouteWithLayout
        component={RightPath}
        path={ROUTES.RIGHT_PATH_PAYMENT_LINK}
        layout={Box} />
        
    </Switch>
  );
}

export default AppRouter;
