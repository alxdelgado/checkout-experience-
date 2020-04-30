import React, { Fragment } from 'react';

// import styles
import {
    SubscriptionWrapper,
    SubscriptionTitle,
    SubscriptionSpan
} from '../subscription-page/subscription-page.styles';

// import components
const StarterSubscription = React.lazy(() => import('../../components/subscription-options/starter-subscription.component'));

export default function SubscriptionPage() {
    return (
        <React.Fragment>
            <SubscriptionWrapper>
                <SubscriptionTitle>Get Started Today</SubscriptionTitle>
                <SubscriptionSpan>Choose the right plan and start creating projects</SubscriptionSpan>
                <StarterSubscription />
            </SubscriptionWrapper>
        </React.Fragment>
    )
}; 
