import React from 'react';
import './profile.css'

const Profile = (props) => {
    console.log(props);
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
                        <span><span id='b-time'>10</span>m</span>
                        <span><span id='b-time'>20</span>m</span>
                        <span><span id='b-time'>30</span>m</span>
                    </div>
                </div>
            
            <div className="ride-detils">
                <h4>Ride details</h4>
                <div>
                    <p>Ride Time</p>
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