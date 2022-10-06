import React,{useState,useCallback} from "react";
const URL = "https://api.postalpincode.in/pincode"
const DebounceWithFunction=()=>{

                ///////////    Note  /////////////

    // Let’s make a function debounce. It will return us another function (an optimized function).
    // The logic behind this function will be that only when the time between two keypress events is
    //  greater than 500 milliseconds, only then will the data be fetched from the API. 
    //  If the delay is more than 500 milliseconds, only then will the handleChange function be called.

    // We will use apply a function to fix our context.
    // If the delay between these two keystroke events is less than 500 ms,
    // then we should clear this setTimeout (timer variable).
    // We will use this optimized function (returned from debounce function)
    // instead of directly calling the handleChange method.


  const [datastore, setDataStore] = useState([]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  // Method 1 - from scratch
  const debounce = (func) => {
    let timer;
    return function () {
      let args=arguments
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    console.log(value,'value')
    fetch(`${URL}/${value}`)
     .then((response) => response.json())
     .then((data) => (
      setDataStore(data[0].PostOffice),
      setMessage(data[0].Message),
      setStatus(data[0].Status)
    )
  );
  };

  const optimizedFn =useCallback(debounce(handleChange),[])
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Debouncing in React JS with function</h2>
      <div style={{ textAlign: "center" }}>
      <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => optimizedFn(e.target.value)}
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
  );


}
export default DebounceWithFunction;