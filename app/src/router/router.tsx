import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import ExploreRafflesScreen from '../pages/ExploreRafflesScreen';
import RaffleDetailsScreen from './raffleDetails';
import LandingScreen from '../pages/LandingScreen';
import AdminHomeScreen from '../pages/admin/AdminHomeScreen';
import AdminRaffleScreen from '../pages/admin/AdminRaffleScreen';

export const Router: FC = () => (
  <Switch>
    <Route path="/" exact component={LandingScreen} />
    <Route path={`${routes.RAFFLES}/:id`} component={RaffleDetailsScreen} />
    <Route path={routes.RAFFLES} exact component={ExploreRafflesScreen} />
    <Route path={routes.ADMIN.HOME} exact component={AdminHomeScreen} />
    <Route
      path={`${routes.ADMIN.RAFFLES}/:id`}
      exact
      component={AdminRaffleScreen}
    />
  </Switch>
);
