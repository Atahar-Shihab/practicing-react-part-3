
const Pricingcard = ({ pricing }) => {
    console.log(pricing);
    return (
        <div className="border-2 border-blue-500 rounded-lg p-5 m-5 text-center">

            <div>

                <h1 className="text-5xl font-bold">{pricing.name}</h1>
                <h4 className="text-3xl font-semibold text-blue-500">{pricing.price}</h4>
            </div>
            
</div>
    );
};

export default Pricingcard;