import React from 'react';
import Seating from './Components/Seating';
import Date from './Components/Date';
import './style.css';
function App(){
    return(
       <div className='row'> 
        <Date></Date>
        <Seating></Seating>
        </div>
        
    )
}

export default App;