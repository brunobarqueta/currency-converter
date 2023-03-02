import { useEffect, useState } from "react";
import './InputField.css'

const InputField = (props) => {
    const [valueIsNan, setValueIsNan] = useState(false)
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            props.setValue(query)
        }, 700);
    
        return () => {
          clearTimeout(timeoutId);
        }
      }, [query])
    
    const handleOnChange = (event) => {
        isNaN(event.target.value) ? setValueIsNan(true) : setValueIsNan(false), setQuery(event.target.value), props.setText(event.target.value)
    }

    return (
        <div className="mx-4">
            <input className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            value={props.value} 
            onChange={handleOnChange}/>
            {
                valueIsNan ? <p class="text-red-500 text-xs italic">Please type a valid number.</p> : null
            }
            
        </div>
    )
}

export default InputField;