import React, { Fragment, Suspense } from 'react';

// import styled components; 
import {
    ProAvatarWrapper,
    ProAvatarContainer,
    ProAvatarImage
} from './pro-avatar.styles';

// import components; 
const ErrorBoundary = React.lazy(() => import('../error-boundary/error-boundary.component'));

export default function ProAvatar(props) {
    console.log(props);

    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <ProAvatarWrapper>
                        <ProAvatarContainer>
                            <ProAvatarImage src={props.pokemon.data.sprites.front_default} />
                        </ProAvatarContainer>
                    </ProAvatarWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}

