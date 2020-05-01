import styled from 'styled-components';

export const SubscriptionWrapper = styled.div`
    box-sizing: border-box; 
    width: 100%; 
    height: 100%; 
    border: 1px solid blue;
    padding: 0px 0px 10px 10px;  
`;

export const SubscriptionContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
`;

export const SubscriptionTitle = styled.h4`
    text-align: center; 
    font-size: 20px;
    padding: 0 auto; 
`;

export const SubscriptionSpan = styled.p`
    text-align: center;
    padding: 0 auto;
`; 