import React, {useEffect, useState} from 'react';
import Ship from "../LaunchesShip/Ship";

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(ships => setShips(ships))

    }, [])
    return (
        <div>
            {ships.map(ship => <Ship key={ship.mission_name} mission_name={ship.mission_name} launch_year={ship.launch_year}
                                     mission_patch_small={ship.mission_patch_small}/>)}
        </div>
    );
};

export default Ships;