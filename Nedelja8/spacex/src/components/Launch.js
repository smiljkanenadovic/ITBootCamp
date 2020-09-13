import React from 'react';

const Launch = ( {launchObj} ) => {

    return (
        <div className="launch">
            <div className="inner-div-0">
                <img src={launchObj.links.mission_patch} alt=""/>
            </div>
            <div className="inner-div-1">
                <span>{launchObj.rocket.rocket_name}</span>
            </div>
            <div className="inner-div-2">
                <span>{launchObj.launch_year}</span>
            </div>
        </div>
    )
};
export default Launch