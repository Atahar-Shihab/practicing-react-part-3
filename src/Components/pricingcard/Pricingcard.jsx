
const Pricingcard = ({ pricing }) => {
    console.log(pricing);
    return (
        <div className="aura aura-gold border-2 border-blue-500 rounded-lg p-5 m-5 text-center">

            <div>

                <h1 className="text-5xl font-bold">{pricing.name}</h1>
                <img src={pricing.image} alt="" />
                <h4 className="mt-5 text-3xl font-semibold text-blue-500  ">{pricing.price}</h4>
            </div>

            <div className="mt-5">
                <h3 className="text-2xl font-semibold">Features:</h3>
                <p className="text-lg">Here are the features of this plan:</p>
                <ol className="list-decimal list-inside text-center">
                    {
                        pricing.features.map((feature, index) => <li key={index}>{feature}</li>)
                    }
                </ol>
            </div>
<div className="aura aura-dual">
  <div className="card bg-base-100">
    <div className="card-body">
                  <button className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full">
                Get Membership
            </button>
    </div>
  </div>
</div>
            
</div>
    );
};

export default Pricingcard;