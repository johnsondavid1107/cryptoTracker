import React, { useState, useEffect } from 'react';
import API from "../utils/API"
import DatePicker from 'react-date-picker'
import "../Assets/style.css"



function Add() {

    const [name, setCryptoName] = useState('');
    const [value, setCryptoValue] = useState('');
    const [price, setCryptoPrice] = useState('');
    const [marketValue, setMarketValue] = useState('')
    const [totalCrypto, setTotal] = useState(0)
    const [date, setDate] = useState(new Date())

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
    function handleMarketChange(event) {

        console.log(event.target.value)
        setMarketValue(event.target.value)

    }

    function getIt() {
        API.getCrypto().then(function (response) {
            console.log(response.data.length)
            if (response.data.length !== 0) {
                let total = 0;
                console.log(response.data)
                response.data.forEach(element => {
                    total += element.total
                });
                setList(response.data)
                setTotal(total);

                console.log(listOfCrypto)
            }

        });
    }
    function handleAdd(e) {
        let id = e.target.parentNode.id
        let add = document.querySelector(`[data-value='${id}USD']`).value
        let price = add * document.querySelector(`[data-value='${id}Price']`).value
        setTotal(totalCrypto + parseInt(add))
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
        console.log(parseInt(price) * parseInt(value))
        let obj = {
            name: name,
            value: value,
            price: price,
            crypto: value / price,
            date: date

        }
        setTotal(totalCrypto + parseInt(value));

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
    function handleCalculate(e) {
        console.log(e.target.parentNode.id)
        console.log()
        let total = document.querySelector(`[data-id='${e.target.parentNode.id}']`).textContent

        let profit = total - marketValue;
        console.log(profit)
        setMarketValue('')
    }


    return (
        <div>

            <h1>Enter your CryptoCurrencies</h1>
            <h3>Total Crypto Purchsed: <span>{totalCrypto}</span></h3>

            <form>
                <input type="text" id="cryptoName" onChange={handleNameChange} placeholder="Name of Crypto"></input>
                <input type="text" id="cryptoAmount" onChange={handleAmountChange} placeholder="Amount"></input>
                <input type="text" id="cryptoPrice" onChange={handlePriceChange} placeholder="Price"></input>
                <DatePicker
                    onChange={setDate}
                    value={date}

                />
                <button id="addCrypto" onClick={handleSubmit}>Add Here</button>

            </form>

            <ul>

                {listOfCrypto.map((query, i) => (

                    <li key={query + i} id={query._id} style={{ listStyleType: "none" }}>
                        <h2 className="">{query.name}
                        </h2> |
                        <h2 className='listEl'>USD: <span data-id={query._id}>{query.total}</span></h2> |
                        <h4 className='listEl'>at ${query.price}</h4>
                        <input placeholder="Total Market Value Now" onChange={handleMarketChange}></input>
                        <button onClick={handleCalculate}>
                            Click to calculate
                        </button>
                        <h2 className='listEl'>Calculated Profit</h2>
                        <button onClick={findId}>Delete</button>
                        <br></br>
                        <input placeholder="Enter More USD" data-value={`${query._id}USD`}></input>
                        <input placeholder="Enter Crypto Price" data-value={`${query._id}Price`}></input>
                        <button onClick={handleAdd}>{query.name}</button> |<ul>
                            {query.entries.map((selection, i) => (

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