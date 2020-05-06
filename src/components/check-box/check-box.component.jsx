import React, { Fragment, Suspense, useState, useEffect } from 'react';

export default function CheckBox() {
    // init state for check box; 
    const [checkedBoxes, setCheckedBoxes] = useState({});

    // handleChange event for check box; 
    const handleChange = event => {
        setCheckedBoxes({
            ...checkedBoxes,
            [event.target.name]: event.target.checked
        });
        console.log('checkedBoxes: ', checkedBoxes);
    }

    // create an array of objects to map over in the render;
    const checkboxes = [
        {
            name: 'check-box-1',
            key: 'checkBox1',
            label: "1 TB Cloud Storage"
        },
        {
            name: 'check-box-2',
            key: 'checkBox2',
            label: 'Active projects'
        },
        {
            name: 'check-box-3',
            key: 'checkBox3',
            label: 'Team members'
        }
    ]

    // render out the check-box element and input;
    return (
        <div>
            <label></label>
        </div>
    )
};