import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
const URL = "https://api.postalpincode.in/pincode"

const DebounceWithSetTimeout = () => {
const navigate=useNavigate()
    const [searchinput, setSearchInput] = useState('')
    const [datastore, setDataStore] = useState([])
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

useEffect(() => {
        const Timer = setTimeout(() => {
            if (searchinput) {
                return FetchDataFromAPi()
            }

        }, 2000)
        return (() => clearTimeout(Timer))


    }, [searchinput])

    const SearchInputData = (e) => {
        setSearchInput(e.target.value)
    }

    const FetchDataFromAPi = () => {
        fetch(`${URL}/${searchinput}`)
            .then((response) => response.json())
            .then((data) => (
                setDataStore(data[0].PostOffice),
                setMessage(data[0].Message),
                setStatus(data[0].Status)
            ))

    }

    return (
        <>
        <div className='App'> 
        To go back :<br />
        <button
        onClick={()=>navigate(-1)}> Go back </button>
<br />
            Search your data : <br />
            <input
                type='text'
                placeholder='type pinCode'
                value={searchinput}
                onChange={SearchInputData}
            /><br />

            {!datastore?.length || datastore === undefined || datastore === null ? `Status:${status}
Message: ${message}` :

                <>
                    {datastore.map((item) => (
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
export default DebounceWithSetTimeout;