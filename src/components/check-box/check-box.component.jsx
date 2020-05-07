import React, { Fragment, Suspense, useState, useEffect } from 'react';

// import styled-components; 
import {
    CheckBoxWrapper
} from './check-box.styles';

// import components; 
const _Check_Box = React.lazy(() => import('../../elements/checkbox/checkbox.component'));

export default function CheckBox() {
    // init state for check box; 
    const [checked, setChecked] = useState(false);

    // handleChange event for check box; 
    const handleChange = event => {
        setChecked({ checked: event.target.checked })
    }

    // create an array of objects to map over in the render;
    // const checkboxes = [
    //     {
    //         name: 'check-box-1',
    //         key: 'checkBox1',
    //         label: "1 TB Cloud Storage"
    //     },
    //     {
    //         name: 'check-box-2',
    //         key: 'checkBox2',
    //         label: 'Active projects'
    //     },
    //     {
    //         name: 'check-box-3',
    //         key: 'checkBox3',
    //         label: 'Team members'
    //     }
    // ]

    // render out the check-box element and input;
    return (
        <CheckBoxWrapper>
            <label>
                <_Check_Box
                    checked={checked}
                    onChange={handleChange}
                />
            </label>
        </CheckBoxWrapper>
    )
};