import styled from 'styled-components';

export const ProWrapper = styled.div`
    box-sizing: border-box;
    display: flex; 
    width: 20em;
    height: 30em; 
    border: 1px solid red;
    padding: 0px 0px 10px 10px;
    margin: 5em 0px 10em 1em; 
`;

export const ProContainer = styled.div`
    box-sizing: border-box;
    border: 1px solid black; 
    width: 15em; 
    height: 23em;
    padding: 1em 0em 1em 0em;
    margin: 3em 0em 0em 2em; 
    
`;

export const ProTitle = styled.h4`
    padding: 0em 0em 0em 4.5em;
    margin: 1em 0em 0em 1em;
    font-size: 20px;  
`;

export const EuroSymbol = styled.p`
    font-size: 13px;
    padding-left: 7em;
    margin: 1em 0em 0em 1em;
`;

export const Cost = styled.p`
    font-size: 20px;
    padding-left: 6em;
    margin-top: -12px;
`;

export const PerMonth = styled.p`
    font-size: 15px;
    padding-left: 9em;
    margin-top: -38px;
`;