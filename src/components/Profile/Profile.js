import React from 'react';
import './profile.css'

const Profile = (props) => {
    // console.log(props.ride);
    const breakHandle = (e) => {
        console.log(e);
        

    }

    const {ride} = props;
    let totalTime = 0;
    for(const rTime of ride){
        
        totalTime = totalTime + rTime.time;
        console.log(totalTime);
    }
    return (
        <div>
            <div className="profile-box">
                <div className="p-info">
                <img src="" alt="" />
                <h4>MAHADI HASAN</h4>
                </div>
                <div className="break">
                    <h4>Add a break</h4>
                    <div>
                       <span><button onClick={() => breakHandle(e)}>20</button>min</span>
                       <span><button onClick={() => breakHandle(e)}>15</button>min</span>
                       <span><button onClick={() => breakHandle(e)}>30</button>min</span>
                       <span><button onClick={() => breakHandle(e)}>20</button>min</span>
                    </div>
                </div>
            
            <div className="ride-detils">
                <h4>Ride details</h4>
                <div>
                    <p>Ride Time: {totalTime}</p>
                </div>
                <div>
                    <p>Break Time</p>
                </div>
            </div>
            <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Profile;