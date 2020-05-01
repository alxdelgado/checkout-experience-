import React, { Fragment, Suspense } from 'react';
import Loadable from 'react-loadable';

// import styles
import {
    SubscriptionWrapper,
    SubscriptionContainer,
    SubscriptionTitle,
    SubscriptionSpan
} from '../subscription-page/subscription-page.styles';

// import components; 
const ErrorBoundary = React.lazy(() => import('../../components/error-boundary/error-boundary.component'));
const StarterSubscription = React.lazy(() => import('../../components/subscription-options/starter-subscription.component'));
const ProSubscription = React.lazy(() => import('../../components/subscription-options/pro-subscription.component'));


export default function SubscriptionPage() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <SubscriptionWrapper>
                        <SubscriptionTitle>Get Started Today</SubscriptionTitle>
                        <SubscriptionSpan>Choose the right plan and start creating projects</SubscriptionSpan>
                        <SubscriptionContainer>
                            <StarterSubscription />
                            <ProSubscription />
                        </SubscriptionContainer>
                    </SubscriptionWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}; 
