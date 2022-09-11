import { useEffect, useState } from "react";
import './InputField.css'

const InputField = (props) => {

    const [query, setQuery] = useState("");
    const [apiQuery, setApiQuery] = useState("");

    useEffect(() => {

    });
    
    const onType = (event) => {
        props.setValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="amount">
            <input type="text" value={props.value} onChange={onType}/>
        </div>
    )
}

export default InputField;