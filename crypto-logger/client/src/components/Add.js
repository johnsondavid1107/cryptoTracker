import React, { useState, useEffect } from 'react';
import API from "../utils/API"
import "../Assets/style.css"



function Add() {

    const [name, setCryptoName] = useState('');
    const [value, setCryptoValue] = useState('');
    const [price, setCryptoPrice] = useState('');
    const [dbResponse, setResponse] = useState('')

    const [listOfCrypto, setList] = useState([]);

    useEffect(() => {
        API.getCrypto().then(function (response) {
            console.log(response.data.length)
            if (response.data.length >= 1) {
                setList(response.data)
                console.log(listOfCrypto)
            }

        });

    }, [])

    function handleAmountChange(event) {

        console.log(event.target.value)
        setCryptoValue(event.target.value)

    }
    function handleNameChange(event) {

        console.log(event.target.value)
        setCryptoName(event.target.value)

    }
    function handlePriceChange(event) {

        console.log(event.target.value)
        setCryptoPrice(event.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            name: name,
            value: value,
            price: price,
            initial: 0,

        }
        setList(listOfCrypto => [...listOfCrypto, obj])

        API.createCrypto(obj).then(function (response) {
            console.log(response.data)
            setResponse(response.data)

        })


        console.log(listOfCrypto)
        document.getElementById("cryptoName").value = ""
        document.getElementById("cryptoAmount").value = ""
        document.getElementById("cryptoPrice").value = ""

    }



    return (
        <div>

            <h1>Enter your CryptoCurrencies</h1>

            <form>
                <input type="text" id="cryptoName" onChange={handleNameChange} placeholder="Name of Crypto"></input>
                <input type="text" id="cryptoAmount" onChange={handleAmountChange} placeholder="Amount"></input>
                <input type="text" id="cryptoPrice" onChange={handlePriceChange} placeholder="Price"></input>
                <button id="addCrypto" onClick={handleSubmit}>Add Here</button>


            </form>





            <ul>

                {listOfCrypto.map((query, i) => (
                    console.log(query),
                    <li key={query + i} id={dbResponse._id} style={{ listStyleType: "none" }}>
                        <h2 className="">{query.name}
                        </h2> |
                        <input placeholder="Enter More"></input>
                        <button >{query.name}</button> |
                <h2 className='listEl'>{dbResponse.total}</h2> |
                        <input placeholder="Market"></input>
                        <button>
                            Click to calculate
                        </button>
                        <h2 className='listEl'>Calculated Profit</h2>
                        <hr></hr>
                    </li>

                ))

                }


            </ul>



        </div>
    )
}
export default Add