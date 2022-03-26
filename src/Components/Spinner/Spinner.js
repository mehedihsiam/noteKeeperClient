import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="mx-auto container flex align-middle justify-center">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;