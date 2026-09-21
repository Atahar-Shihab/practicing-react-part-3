// import React from 'react';
import { use } from 'react';
import Pricingcard from '../pricingcard/Pricingcard.jsx';
const Pricing = ({ pricingPromise }) => {


    const pricingData = use(pricingPromise);
    return (
        <div className="">
            <h2 className="text-5xl font-bold text-center">Get our premium plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {

                pricingData.map(pricing =>
                    <Pricingcard key={pricing.id} pricing={pricing}></Pricingcard>
                )
            }
            
            
            </div>  

        </div>
        
    );
};

export default Pricing;


