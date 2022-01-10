import React, { useState, useEffect } from "react"


function List(props) {

    const [mylist, setListB] = useState([])

    useEffect(() => {
        setListB(props.list);
        console.log(mylist)
    }, [])





    return (
        <div>

            <ul id="store">

                {
                    mylist.map((li) =>
                       {return <li key={li}> {li}</li>}

                    )
                }

            </ul>



        </div>
    )

}
export default List