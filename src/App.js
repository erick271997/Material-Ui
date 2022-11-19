/* npm install @mui/material @emotion/react @emotion/styled */
import './App.css';
import { Button, Slider } from '@mui/material';

function App() {
  return (
    <di>
<Button sx={{color: 'red', width: '50px', display: 'block', height: '50px', borderradius:' 50%'}}>Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Slider disabled defaultValue={30} aria-label="Disabled slider" />
<Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </di>
   
  );
}
/* display: block;
width: 50px;
height: 50px;
border-radius: 50%; */

export default App;
