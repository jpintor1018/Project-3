import React from 'react';
import Seating from '../Components/Seating';
import Date from '../Components/Date';
import Parallax from '../Components/Parallax';


function Home() {
    return (
        <div id="container">
            <div className="row">
                <Parallax />
                <div className="col-s-2" id="date-html"><Date></Date></div>
                <div className="col-lg-9" id="seating-html"><Seating></Seating></div>
            </div>
        </div>
    );
};

export default Home;