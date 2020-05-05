import React, { Fragment, Suspense } from 'react';

// import styled components;
import {
    StarterAvatarWrapper,
    StarterAvatarContainer,
    StarterAvatarImage
} from './starter-avatar.styles';

// import components; 
const ErrorBoundary = React.lazy(() => import('../error-boundary/error-boundary.component'));

export default function StarterAvatar(props) {
    console.log(props);

    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <StarterAvatarWrapper>
                        <StarterAvatarContainer>
                            <StarterAvatarImage src={props.pokemon.data.sprites.front_default} />
                        </StarterAvatarContainer>
                    </StarterAvatarWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}; 
