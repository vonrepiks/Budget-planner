import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import Expenses from './components/Expenses';
import MonthlyBalance from './components/MonthlyBalance';
import YearlyBalance from './components/YearlyBalance';

const Routes = ({ store }) => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/monthly" component={MonthlyBalance} />
      <Route path="/yearly" component={YearlyBalance} />
    </Switch>
);

export default Routes;