import React from 'react';

const Ship = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props

    return (
        <div className='wrapper'>
            <div className='info_left'>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <div className='photo_right'>
                <img className='img' src={mission_patch_small} alt='Ship'/>
            </div>
        </div>
    );
};

export default Ship;