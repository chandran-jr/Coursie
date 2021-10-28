import React, { useState } from 'react';
import './Filterbar.css';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Filterbar() {
    const [value, setValue] = useState(null);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="Filterbar">
            
            <div className="Filterbar__card">
                <LocalLibraryIcon className="Filterbar__CardIcon" />
                <input placeholder="Course" type="text" />
            </div>

            <div className="Filterbar__card">
                <FormatLineSpacingIcon className="Filterbar__CardIcon" />
                <input placeholder="Child Subject" type="text" />
            </div>


            <div className="Filterbar__card">
            <LocalizationProvider className="Filterbar__cardInputdate" dateAdapter={AdapterDateFns}>
                <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                        }}
                renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div className="Filterbar__cardCheck">
            <Checkbox {...label} defaultChecked />
            <h3>Self Paced</h3>
             </div>

             <Button className="button" variant="contained">Search</Button>

             <Button className="button" variant="contained">Reset</Button>

        </div>
    )
}

export default Filterbar
