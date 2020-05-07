import React from 'react';

// import styled-components; 
import {
    CheckBoxContainer,
    StyledCheckBox,
    HiddenCheckBox,
    Icon
} from './checkbox.styles';


const _check_box = ({ className, checked, ...props }) => {
    return (
        <CheckBoxContainer className={className}>
            <HiddenCheckBox checked={checked} {...props} />
            <StyledCheckBox checked={checked} />
            <Icon viewBox='0 0 24 24'>
                <polyline points='20 6 9 17 4 12' />
            </Icon>
        </CheckBoxContainer>
    )
}

export default _check_box;
