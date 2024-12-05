import  React  from "react";

function InputBox(
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency='usd',
    currecnyOptions=[],
    amountDisabled=false,
    currencyDisabled=false,
){
    return( 
        <div className=" flex bg-orange-200">
            <div className="block  p-10 m-10">
                <label htmlFor="" className="p-1">{label}</label>
                <input 
                    type="number"  
                    className="p-1"
                    value={amount}
                    disabled={amountDisabled}
                    placeholder="Amount"
                    onChange={(e)=> {onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select 
                    name="" id=""
                    className=""
                    value={selectedCurrency}
                    disabled={currencyDisabled}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                >
                    {currecnyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox