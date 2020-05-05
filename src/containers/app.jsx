import React, { Suspense } from 'react';
import axios from 'axios';

import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';

// import pages; 
const HomePage = React.lazy(() => import('../pages/home-page/home-page.component'));
const SubscriptionPage = React.lazy(() => import('../pages/subscription-page/subscription-page.component'));


//import components;
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

export default function App() {

    return (
        <Router>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading....</div>}>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/subscription' component={SubscriptionPage} />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </Router>
    )
}