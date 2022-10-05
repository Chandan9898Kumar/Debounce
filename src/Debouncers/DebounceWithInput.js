import React, { useState } from "react";
import { DebounceInput } from 'react-debounce-input';
import '../App.css';
import { useNavigate } from "react-router-dom";
const URL = "https://api.postalpincode.in/pincode"

const InputDebounce = () => {
    const navigate=useNavigate()
    const [storeData, setStoreData] = useState([])
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

    const HandleChange = (e) => {
        fetch(`${URL}/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => (
                setStoreData(data[0].PostOffice),
                setMessage(data[0].Message),
                setStatus(data[0].Status)
            ))
    }
// Here we are using DebounceInput Directly.

// It is the simplest way compared to the previous two methods. 
// Just use DebounceInput provided by the react-debounce-input library
// instead of using the normal input tag. And provide delay as an attribute.
    return (
        <>
            <div className="App">
                    <button
                    onClick={()=>navigate(-1)}>Go back</button>
                            <br /><br /><br />
                <label> Search your details by typing pin code</label><br />
                <DebounceInput
                    minLength={2}
                    className="search"
                    placeholder="Enter pin Code here..."
                    debounceTimeout={500}
                    onChange={e => HandleChange(e)} /><br /><br /><br />

                {!storeData?.length || storeData === undefined || storeData === null ? `Status:${status}
Message: ${message}` :

                    <>
                        {storeData.map((item) => (
                            <li>
                                Name : {item.Name}<br />
                                Block :{item.Block}<br />
                                BranchType : {item.BranchType}<br />
                                <hr />
                            </li>
                        ))}
                    </>
                }
            </div>
        </>
    )
}
export default InputDebounce;