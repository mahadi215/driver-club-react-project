import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Ride from '../Ride/Ride';
import './Home.css'

const Home = () => {
    const [rides, setRides] = useState([]);
    const [time, setTimes] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRides(data))
    },[])

    // let previusTime = 0;
    let arr;
    const addToList =(ride) => {
        // console.log(ride);
        
        
       arr = [...time, ride]
    
        setTimes(arr);


    }
    return (
        <div className='home-container'>
            <div className="left-side">
                <h4>Select Today's Ride</h4>
                <div className="rides-container">
                    {
                        rides.map(ride => <Ride key={ride.id} ride={ride}
                        addToList={addToList}></Ride>)
                    }
                </div>
            </div>
            <div className="rigt-side">
                <Profile ride={time}min></Profile>
            </div>
        </div>
    );
};

export default Home;