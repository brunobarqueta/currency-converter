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
        <div className="amount">
            <input type="text" value={props.value} onChange={handleOnChange}/>
            {
                valueIsNan ? <p className="error">Please type a valid number.</p> : null
            }
            
        </div>
    )
}

export default InputField;