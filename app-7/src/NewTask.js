import React, {useState} from 'react';

const NewTask = (props) => {
    const [userInput, setUserInput] = useState('')

    const onClickHandler = (e) => {
        e.preventDefault()
        props.add(userInput)
        inputCleanup();
    }

    const inputChange = (e) => {
        setUserInput(e.target.value);
    }

    const inputCleanup = () => {
        setUserInput('');
    }

    return(
        <form>
            <input id="input" type="text" value={userInput} onChange={inputChange}/>
            <button onClick={onClickHandler}>Add</button>
        </form>
    )
}

export default NewTask