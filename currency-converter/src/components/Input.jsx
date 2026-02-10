import React, {useId} from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrChange,
    currencyOption = [],
    selectCurr = "usd",
    amountDisable = false,
    currencyDisable = false,
    className="",
}) {
    const amountIn = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountIn}> {label} </label>
                <input id={amountIn} type="number" disabled={amountDisable} value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}></input>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p>Currency Type</p>
                <select value={selectCurr} disabled={currencyDisable}
                    onChange={(e)=> onCurrChange && onCurrChange(e.target.value)}>
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Input;