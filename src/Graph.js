import React, { useState } from 'react';
import './Graph.css';
import { Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import UniGraph from './UniGraph';
import ParentGraph from './ParentGraph';

function Graph({data}) {

    const [univ,setUniv] = useState(true);
    const [option,setOption] = useState();

    const changeFunc = (e) => {
        setOption(e.target.value);
        console.log(option);
      
        if(option===20) {
          setUniv(true);
        }
        else {
          setUniv(false);
        }
       }

    return (
        <div className="graph">

        <div className="form">
            <FormControl>
    <InputLabel>University</InputLabel>
    <Select onChange={changeFunc} style={{ width: 200 }}>
    <MenuItem value={20}>Parent Subject</MenuItem>
    <MenuItem value={10}>University</MenuItem>
    </Select>
    </FormControl>

    </div>


        <div className="renderGraph">
            {univ ? <UniGraph data={data}/> : <ParentGraph data={data}/>}
        </div>

        </div>
    )
}

export default Graph
