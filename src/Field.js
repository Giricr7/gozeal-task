import React from 'react';
import TextField from '@mui/material/TextField';

function Field(props) {


    return (
        <div data-testid='field_testid'>
            <h3>{props.heading}</h3>
            {/* text field component */}
            <TextField
                fullWidth
                placeholder="Enter Certification Name"
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                helperText={!props.validate?`Please enter ${props.errMsg}`:''}
                error={!props.validate ? true : false}
                
            />
        </div>
    )

}
    export default Field