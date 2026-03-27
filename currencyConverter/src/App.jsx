import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Inputbox from "./components/Inputbox";
import "./App.css";

 function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[toCurrency]) {
      setConvertedAmount(
        (amount * currencyInfo[toCurrency]).toFixed(2)
      );
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     'url("https://www.google.com/imgres?q=cool%20unique%20backgrounds&imgurl=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FFree-Unique-Backgrounds-Images-Download.jpg&imgrefurl=https%3A%2F%2Fwww.pixelstalk.net%2Ffree-unique-backgrounds%2F&docid=KslcXjFeAU5HhM&tbnid=DAXX76dRmdjkYM&vet=12ahUKEwi06tmGzfySAxVqSmwGHdhtEhoQnPAOegQIIhAB..i&w=1920&h=1440&hcb=2&ved=2ahUKEwi06tmGzfySAxVqSmwGHdhtEhoQnPAOegQIIhAB")',
      // }}
    >
      <div className="w-full max-w-md rounded-lg p-5 backdrop-blur-md bg-white/30 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert(n);
          }}
        >
          <div className="w-full mb-3">
            <Inputbox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              currentOptions={options}
              selectCurrency={fromCurrency}
              onCurrencyChange={setFromCurrency}
            />
          </div>

          <div className="relative w-full h-0.5 mb-3">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="mb-3">
            <Inputbox
              label="To"
              amount={convertedAmount}
              amountDisable
              currentOptions={options}
              selectCurrency={toCurrency}
              onCurrencyChange={setToCurrency}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-md mt-2"
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;