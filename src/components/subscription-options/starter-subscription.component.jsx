import React, { Fragment, Suspense } from 'react';

//import styled components 
import {
    StarterWrapper,
    StarterContainer,
    StarterTitle,
    EuroSymbol,
    Cost,
    PerMonth
} from './starter-subscriptions.styles';


// import components; 
const ErrorBoundary = React.lazy(() => import('../error-boundary/error-boundary.component'));


export default function StarterSubscription() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <StarterWrapper>
                        <StarterContainer>
                            <StarterTitle>Starter</StarterTitle>
                            <EuroSymbol>€</EuroSymbol>
                            <Cost>0</Cost>
                            <PerMonth>/ month</PerMonth>
                        </StarterContainer>
                    </StarterWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}; 
