import React, { useEffect, useState } from 'react';




function Home() {
    const [newAdd, setCryptoName] = useState('');

    function handleChange(event) {
        setCryptoName(event.target.value)

    }
    function handleSubmit(){
        
    }

    return (
        <div>
            <h1>Enter your CryptoCurrencies</h1>
            <div>
                <input type="text" id="cryptoName" onChange={handleChange}></input>
                <button id="addCrypto" onClick={console.log(newAdd)}>Add Here</button>

            </div>
            <div>
                <ul id="store">

                </ul>

            </div>
        </div>

    )
}

export default Home;