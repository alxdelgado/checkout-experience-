import React, { Fragment } from 'react';

//import styled components 
import {
    StarterWrapper,
    StarterTitle,
    EuroSymbol,
    Cost,
    PerMonth
} from './starter-subscriptions.styles';


export default function StarterSubscription() {
    return (
        <React.Fragment>
            <StarterWrapper>
                <StarterTitle>Starter</StarterTitle>
                <EuroSymbol>€</EuroSymbol>
                <Cost>0</Cost>
                <PerMonth>/ month</PerMonth>
            </StarterWrapper>
        </React.Fragment>
    )
}; 
