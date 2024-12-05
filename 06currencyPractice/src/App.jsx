import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo]= useState('inr');
  const [convertedAmount, setConvertedAmount] =useState(0);
  const currecnyInfo = useCurrencyInfo(from);
  const options = Object.keys(currecnyInfo);

  function swap(){
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setTo(from);
    setFrom(to);
  }

  function convert(){
    setConvertedAmount(amount*currecnyInfo[to]);
  }

  return (
    <div className='w-full h-screen bg-green-400'>
      <div>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div>
              <InputBox
                label={from}
                value={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setFrom(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
