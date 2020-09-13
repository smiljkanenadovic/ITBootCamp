import React from 'react'
import Launch from './Launch'

const LaunchList = ({launchArr}) => {
    return (
        <div className='launch-list'>
            {launchArr.map(launchObj =>
                <Launch key={launchObj.flight_number} launchObj={launchObj}/>)}
        </div>
    )
};
export default LaunchList