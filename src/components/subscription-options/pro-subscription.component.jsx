import React, { Fragment, Suspense } from 'react';

// import styled components; 
import {
    ProWrapper,
    ProContainer,
    ProTitle,
    EuroSymbol,
    Cost,
    PerMonth
} from './pro-subscription.styles';

// import components; 
const ErrorBoundary = React.lazy(() => import('../error-boundary/error-boundary.component'));

export default function ProSubscription() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <ProWrapper>
                        <ProContainer>
                            <ProTitle>Professional</ProTitle>
                            <EuroSymbol>€</EuroSymbol>
                            <Cost>0</Cost>
                            <PerMonth>/ month</PerMonth>
                        </ProContainer>
                    </ProWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}