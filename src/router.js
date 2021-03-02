import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { MainLayout } from './layout';
import {RightPath } from './views';
import * as ROUTES from './utils/constants/routes';
import { Box } from '@chakra-ui/react';
import SuccessTransaction from './components/result/success';


const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Box}
        path={ROUTES.LANDING}
        layout={MainLayout}  exact/>
        <RouteWithLayout
        component={RightPath}
        path={ROUTES.RIGHT_PATH_PAYMENT_LINK}
        layout={Box} />
        <RouteWithLayout
        component={SuccessTransaction}
        path={ROUTES.RIGHT_PATH_PAYMENT_SUCCESS}
        layout={Box} />
        
    </Switch>
  );
}

export default AppRouter;
