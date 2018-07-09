import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense';
import ExpenseDashboardPage from '../components/expense-dashboard';
import HelpPage from '../components/help';
import NotFoundPage from '../components/not-found';
import Header from '../components/header';
import LoginPage from '../components/login';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>    
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;