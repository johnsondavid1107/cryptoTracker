import React, { useState, useEffect } from 'react'



function Add() {

    const [newAdd, setCryptoName] = useState('');

    const [listOfCrypto, setList] = useState([]);

    useEffect(() => {
        console.log(listOfCrypto)
    }, [])

    function handleChange(event) {
        setCryptoName(event.target.value)

    }
    const handleSubmit = () => {
        let obj = {
            name: newAdd,
            value: 0,
            initial: 0,

        }
        setList(listOfCrypto => [...listOfCrypto, obj])

        console.log(listOfCrypto)

    }



    return (
        <div>

            <h1>Enter your CryptoCurrencies</h1>

            <input type="text" id="cryptoName" onChange={handleChange}></input>
            <button id="addCrypto" onClick={handleSubmit}>Add Here</button>



            <ul>

                {listOfCrypto.map((query, i) => (
                    console.log(query),
                    <li key={query + i}>{query.name}</li>,
                    <h4 key={query.value + i}>{query.value}</h4>
                ))

                }




            </ul>
            <div>
                <h4 >

                </h4>
            </div>




        </div>
    )
}
export default Add