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
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Cards from './Cards';


function Filterbar() {

    const [value, setValue] = useState();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [course,setCourse] = useState("");
    const [childSub,setchildSub] = useState("");
    const [checked,setChecked] = useState(false);
    const [cardShow,setcardShow] = useState(<Cards
        cn={course}
        cs={childSub}
        date={value}
        sp={checked}
    />);

    const refresh = () => {
        setCourse("");
        setchildSub("");
        setValue(null);
    }

    const search = () => {
            setcardShow(<Cards
                cn={course}
                cs={childSub}
                date={value}
                sp={checked}
            />);
    }

    const checkboxClick = (e) => {
        setChecked(e.target.checked);
    }

    return (

        <div>
        <div className="Filterbar">
            
            <div className="Filterbar__card">
                <LocalLibraryIcon className="Filterbar__CardIcon" />
                <input onChange={(e) => setCourse(e.target.value)} value={course} placeholder="Course" type="text" />
            </div>

            <div className="Filterbar__card">
                <FormatLineSpacingIcon className="Filterbar__CardIcon" />
                <input onChange={(e) => setchildSub(e.target.value)} value={childSub} placeholder="Child Subject" type="text" />
            </div>


            <div className="Filterbar__card">
            <LocalizationProvider className="Filterbar__cardInputdate" dateAdapter={AdapterDateFns}>
                <DatePicker
                label="Date"
                value={value}
                border="none"
                onChange={(newValue) => {
                setValue(newValue);
                        }}
                renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div className="Filterbar__cardCheck">
            <Checkbox onChange={checkboxClick} {...label} />
            <h3>Self Paced</h3>
             </div>

            
             <Button onClick={search} className="button" variant="contained">
             <SearchIcon className="searchIcon"/> Search
             </Button>

             <RefreshIcon onClick={refresh} className="refresh"/>

        </div>

        {cardShow}

        </div>
    )
}

export default Filterbar
