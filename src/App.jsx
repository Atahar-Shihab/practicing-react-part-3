import './App.css'
import Daisynav from './Components/DaisyNav/Daisynav'
import {Suspense} from 'react'
import Pricing from './Components/Pricing/Pricing'





const pricingPromise = fetch('pricingData.json').then(res => res.json());



function App() {

  return (
    <>

      <header>
        <Daisynav></Daisynav>
      </header>


      <main>
        <h1 className="underline text-7xl text-center text-blue-500 font-bold mt-20">Get started</h1>

        <Suspense fallback={<span className="justify-center loading loading-infinity loading-xl"></span>
        }>
          <Pricing fallback={<span className="loading loading-ball loading-xl"></span>} pricingPromise={pricingPromise}> </Pricing>
        </Suspense>

        <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
      </main>
    </>
  )
}

export default App
