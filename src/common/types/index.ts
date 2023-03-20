import type React from 'react';
import { Route } from 'react-router-dom';

export type AppRoute = React.ComponentProps<typeof Route> & {
  key: string;

  routes?: AppRoute[];
};
