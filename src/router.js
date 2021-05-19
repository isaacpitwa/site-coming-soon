import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Switch } from 'react-router-dom';

import * as ROUTES from './utils/constants/routes';
import { Home } from './views';
import {RouteWithLayout} from './components'


const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        path={ROUTES.LANDING}
        layout={Box}  exact/>
    </Switch>
  );
}

export default AppRouter;
