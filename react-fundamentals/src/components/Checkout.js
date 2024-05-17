import React, { useRef, useState } from "react";

function Checkout() {
    const [name, setName] = useState('');
    const emailRef = useRef();

    const saveData = (evt) => {
        evt.preventDefault();       // prevents refresh on submit - the default behaviour
        console.log('saved data', name, emailRef.current.value);
    }

    return(
        <form onSubmit={(evt) => saveData(evt)}>
            {/* controlled way */}
            <input placeholder="name" onChange={(evt) => setName(evt.target.value)}/>
            {/* un-controlled way */}
            <input placeholder="email" ref={emailRef}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Checkout;