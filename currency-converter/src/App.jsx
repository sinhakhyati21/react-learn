import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import useCurrInfo from './hooks/useCurrInfo'
import backdrop from './assets/backdrop.jpg'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convert, setConvert] = useState(0);

  const currInfo = useCurrInfo(from);
  const options = Object.keys(currInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convert);
    setConvert(amount);
  };

  const conv = () => {
    setConvert(amount * currInfo[to]);
  };

  return (
    <div className="min-h-screen w-full bg-black" style={{backgroundImage: `url(${backdrop})`}}>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-800/5">
        <div className="w-full max-w-md border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              conv();
            }}
          >
            <div className="w-full mb-3">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(value) => setAmount(value)}
                onCurrChange={(currency) => setFrom(currency)}
                selectCurr={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-md bg-blue-600 text-white px-3 py-0.5"
              >
                swap
              </button>
            </div>

            <div className="w-full mt-3 mb-4">
              <Input
                label="To"
                amount={convert}
                currencyOption={options}
                onCurrChange={(currency) => setTo(currency)}
                selectCurr={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
