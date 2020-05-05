import React, { Fragment, Suspense } from 'react';


// import styled components;
import {
    AvatarWrapper,
    AvatarContainer,
    AvatarImage
} from './avatar.styles';

// import components; 
const ErrorBoundary = React.lazy(() => import('../error-boundary/error-boundary.component'));

export default function Avatar(props) {
    console.log(props);

    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <React.Fragment>
                    <AvatarWrapper>
                        <AvatarContainer>
                            <AvatarImage />
                        </AvatarContainer>
                    </AvatarWrapper>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    )
}; 
