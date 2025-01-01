import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmmount, setConvertedAmmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmmount(amount)
    setAmount(convertedAmmount)
  }

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to])
  }

  return (
    <>
    <Navbar/>
    <div
      className=" w-full h-screen flex flex-wrap justify-center items-center bg-black"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form c
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >

            {/* From Input Box */}
            <div className="w-full mb-1 text-left">
              <InputBox
                label="From"
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => setAmount(amount)}
                selectCurrency = {from}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>

              {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

              {/* To Input Box */}
            <div className="w-full mt-1 mb-4 text-left">
              <InputBox
               label="To"
               amount = {convertedAmmount}
               currencyOptions = {options}
               onCurrencyChange = {(currency) => setTo(currency) }
               selectCurrency = {to}
              />
            </div>

              {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
  

}

export default App
