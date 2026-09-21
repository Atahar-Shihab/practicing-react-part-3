// import React from 'react';
import { use } from 'react';
const Pricing = ({ pricingPromise }) => {


    const pricingData = use(pricingPromise);
    console.log(pricingData);
    return (
        <div>
            I am Pricing component
        </div>
    );
};

export default Pricing;


