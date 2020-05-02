import React, { Fragment, Suspense, useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

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
const Avatar = React.lazy(() => import('../../components/avatar/avatar.component'));

export default function ProSubscription() {

    //init state for pokemon; 
    const [pokemon, setPokemon] = useState([]);

    // init state for error handing; 
    const [error, setError] = useState(null);

    // lifecycle method; 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios('https://pokeapi.co/api/v2/pokemon/1/');
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
        <ErrorBoundary error={error}>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <ProWrapper>
                        <ProContainer>
                            <Avatar pokemon={pokemon} />
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