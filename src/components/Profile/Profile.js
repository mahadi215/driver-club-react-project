import React, { useState } from 'react';
import './profile.css'

const Profile = (props) => {
   
    const [brek, setBreak] = useState([]);
    const breakHandle = (event) => {
       const breakTime = event.target.innerText;
        console.log(breakTime);
        setBreak(breakTime)
    }

    const {ride} = props;
    let totalTime = 0;
    for(const rTime of ride){
        
        totalTime = totalTime + rTime.time;
        console.log(totalTime);
    }
    return (
            <div className="profile-box">
                <div className="p-info">
                <img src="" alt="" />
                <h4 className='name'>MAHADI HASAN</h4>
                <p>Driver <br />
                <small>Doha, Qatar</small></p>
                </div>
                <div className="break">
                    <h4>Add a break</h4>
                    <div>
                       <span><button onClick={(event) => breakHandle(event)}>15</button>min</span>
                       <span><button onClick={(event) => breakHandle(event)}>30</button>min</span>
                       <span><button onClick={(event) => breakHandle(event)}>20</button>min</span>
                       <span><button onClick={(event) => breakHandle(event)}>20</button>min</span>
                    </div>
                </div>
            
            <div className="ride-detils">
                <h4>Ride details</h4>
                <div>
                    <p>Ride Time: {totalTime}min</p>
                </div>
                <div>
                    <p>Break Time {brek}</p>
                </div>
            </div>
            <button>Activity Completed</button>
            </div>

    );
};

export default Profile;