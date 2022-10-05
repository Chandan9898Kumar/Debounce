import React,{useState} from "react"
import { debounce } from "lodash";
import '../App.css';
import { useNavigate } from "react-router-dom";
const URL = "https://api.postalpincode.in/pincode"
const LoadDebounce=()=>{
    const navigate=useNavigate()
    const [storeData, setStoreData] = useState([])
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

// Lodash provides a debounce method that we can use to limit the rate of execution of the
// handleChange function. Just wrap the callback function with the debounce method 
// and provide the amount of delay we want between two events.



const handleChangeWithLib=debounce((e)=>{
    fetch(`${URL}/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => (
                setStoreData(data[0].PostOffice),
                setMessage(data[0].Message),
                setStatus(data[0].Status)
            ))
},500)

//  we used ? on storeData?.length because it helps to get undefined instead of showing an error.

return(
    <>
    <div className="App">
    <button
    onClick={()=>navigate(-1)}>Go back</button>
    <br /><br /><br />
    <label>Type of Pin Code to get Details</label><br />
       <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => handleChangeWithLib(e)}
      /><br /><br /><br />
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
export default LoadDebounce;






//////////////////     Type 2nd of lodash method              ////////////////////////////////


// import { debounce } from "lodash"
// import React, { useState ,useCallback} from "react"
// const URL="https://api.postalpincode.in/pincode"

// const LoadDebounce=()=>{
//   const[datastore,setDataStore]=useState([])
//   const [status,setStatus]=useState(null)
//   const[message,setMessage]=useState(null)

// const getData=(values)=>{
//   console.log(values,'values >>>>>>>>>')
//   fetch(`${URL}/${values}`)
//   .then((response)=> response.json())
//   .then((data)=> (
//     setDataStore(data[0].PostOffice),
//     setMessage(data[0].Message),
//     setStatus(data[0].Status)
//   ))
  
// }


          //////////////////        Note         //////////////////

// debounce(getData, 300) creates a debounced version of the event handled, 
// and useCallback(debounce(getData, 300), []) makes sure to return the same instance of the 
// debounced callback between re-renderings.


// const Debouncers= useCallback(debounce(getData,3000),[])
                    /////   OR 
// const Debouncers= useCallback(debounce((inputVal)=>getData(inputVal),3000),[])

// const InputOnchange=(e)=>{

// Debouncers(e.target.value)

// }
// return(
// <>
// <input
// type="text"
// value={inputVal}
// placeholder='type input'
// onChange={InputOnchange}
// />
// <br /><br />

// {!datastore?.length || datastore === undefined || datastore === null ? `Status:${status}
// Message: ${message}` :

//                     <>
//                         {datastore.map((item) => (
//                             <li>
//                                 Name : {item.Name}<br />
//                                 Block :{item.Block}<br />
//                                 BranchType : {item.BranchType}<br />
//                                 <hr />
//                             </li>
//                         ))}
//                     </>
//                 }


// </>
// )
// }
// export default LoadDebounce;