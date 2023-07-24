import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";

import './loader.css';

export const Loader = () => {
    return (
        <div className='loader-div'>
            <BounceLoader
                color={"#00ed64"}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={2}
            />
        </div>
    )
}
