import React, { Fragment, Suspense, useState, useEffect } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'

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
const StarterAvatar = React.lazy(() => import('../avatar/starter-avatar.component'));

export default function StarterSubscription() {

    //init state for pokemon; 
    const [pokemon, setPokemon] = useState([]);

    // init state for error handing; 
    const [error, setError] = useState(null);

    // lifecycle method; 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios('https://pokeapi.co/api/v2/pokemon/2/');
                setPokemon(response);
            } catch (error) {
                console.log(error);
                setError: true;
            }
        }

        fetchData();
    }, [])
    console.log(pokemon);
    console.log(error);

    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <StarterWrapper>
                        <StarterContainer>
                            <StarterAvatar pokemon={pokemon} />
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
