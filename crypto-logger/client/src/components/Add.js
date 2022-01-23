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
        getIt()

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
    function getIt() {
        API.getCrypto().then(function (response) {
            console.log(response.data.length)
            if (response.data.length !== 0) {
                setList(response.data)
                console.log(listOfCrypto)
            }

        });
    }
    function handleAdd(e) {
        let id = e.target.parentNode.id
        //this is sloppy but it targets the 8th element which is the USD input and the 9th element which is the Crypto Price Element if I add more elements it will throw this off 




        let add = document.querySelector(`[data-value='${id}USD']`).value
        let price = document.querySelector(`[data-value='${id}Price']`).value
        API.updateCrypto({
            amount: add,
            price: price,
            id: id
        }).then(
            function () {
                getIt();
                document.querySelector(`[data-value='${id}USD']`).value = ""
                document.querySelector(`[data-value='${id}Price']`).value = ""
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            name: name,
            value: value,
            price: price,
            initial: 0,

        }

        API.createCrypto(obj).then(function () {
            getIt();
        })


        console.log(listOfCrypto)
        document.getElementById("cryptoName").value = ""
        document.getElementById("cryptoAmount").value = ""
        document.getElementById("cryptoPrice").value = ""

    }
    function findId(e) {

        console.log()
        API.deleteCrypto(e.target.parentNode.id).then(
            function () {
                console.log()
                getIt()
            }
        )
        console.log(e.target.parentNode.id)
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
                    <li key={query + i} id={query._id} style={{ listStyleType: "none" }}>
                        <h2 className="">{query.name}
                        </h2> |
                        <h2 className='listEl'>USD: {query.total}</h2> |
                        <h4 className='listEl'>at ${query.price}</h4>
                        <input placeholder="Total Market Value Now"></input>
                        <button>
                            Click to calculate
                        </button>
                        <h2 className='listEl'>Calculated Profit</h2>
                        <button onClick={findId}>Delete</button>
                        <br></br>
                        <input placeholder="Enter More USD" data-value={`${query._id}USD`}></input>
                        <input placeholder="Enter Crypto Price" data-value={`${query._id}Price`}></input>
                        <button onClick={handleAdd}>{query.name}</button> |<ul>
                            {query.entries.map((selection, i) => (
                                console.log(selection),
                                <li key={selection + i} style={{ listStyleType: "none" }}>
                                    <h3>On: {selection.date} you purchased {selection.amount} at: {selection.marketPrice}</h3>
                                </li>
                            ))}
                        </ul>
                        <hr></hr>
                    </li>

                ))

                }


            </ul>



        </div>
    )
}
export default Add