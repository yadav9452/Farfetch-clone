
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './HomepageDrop.css';


      

export default function HomePageDrop() {
  const [val, setval] = React.useState('8');
 

  const handleChange = (event) => {
    setval(event.target.value);
  };
  

  return (
    <div className='container-drop'>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Featured brands</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={val}
          onChange={handleChange}
          label="value"
        >
          <MenuItem value=" ">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={10}>Mens</MenuItem>
          <MenuItem value={20}>Womens</MenuItem>
          <MenuItem value={30}>Kids</MenuItem>
        </Select>
        
      </FormControl>
     
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Trending Now</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={val}
          onChange={handleChange}
          label="value"
        >
          <MenuItem value=" ">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={10}>Mens</MenuItem>
          <MenuItem value={20}>Womens</MenuItem>
          <MenuItem value={30}>Kids</MenuItem>
        </Select>
        
      </FormControl>
     
  



 
   

    </div>
  );
}

    
