import React from 'react';
import './Ride.css'
const Ride = (props) => {
    // console.log(props);
    const {distance,id,img,passenger, time} = props.ride;
    return (
        <div className='ride-card'>
            <img className='card-img' src={img} alt="" />
            <h3>Distance: {distance}</h3>
            <p>Passenger {passenger}</p>
            <p>Time Required {time}min</p>
            <button onClick={() => props.addToList(props.ride)} > Add To List</button>
        </div>
    );
};

export default Ride;