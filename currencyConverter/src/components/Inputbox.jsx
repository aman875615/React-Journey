import React ,{useId} from 'react'

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currentOptions=[],
  selectCurrency="usd",
  amountDisable = false,
  currencyDisable = false,
  classname = "", }) {
  const AmountInputId=useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`} >
      <div className='w-1/2'>
        <label
         className="text-black/40 mb-2 inline-block"
         htmlFor={AmountInputId}>
          {label}
        </label>
        <input 
        id={AmountInputId}
        type="number"
        className='outline-none w-full bg-transparent py-1.5' 
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisable}
        placeholder='Amount'
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2">{selectCurrency.toUpperCase()}</p>
        
        <select
        className=' rounded-lg px-1 py-1 bg-gray-100 outline-none cursor-pointer'
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
          {currentOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Inputbox