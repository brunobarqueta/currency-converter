import react, { useState } from "react"
import './InputField.css'

const InputField = (props) => {

    const onType = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div className="amount">
            <input type="text" value={props.value} onChange={onType}/>
        </div>
    )
}

export default InputField;