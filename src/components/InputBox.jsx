import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
}) {
   

    return (
        <div className={`bg-black/60 p-4 rounded-lg text-sm flex`}>
            
            <div className="w-1/2">
                <label  className="text-white/80 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-gray-900 py-1.5 rounded-md text-white"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) =>{
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/80 mb-2 w-full">Currency Type</p>
                <select
                    className=" text-white rounded-lg px-1 py-1 bg-gray-900 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) =>{
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
                >
                    
                       {currencyOptions.map((val) =>
                         <option value={val} key={val}>
                             {val}
                         </option>) }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;