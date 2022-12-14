
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHome from './Home'
import DebounceWithSetTimeout from './Debouncers/DebounceWithTimeOut';
import InputDebounce from './Debouncers/DebounceWithInput';
import LoadDebounce from './Debouncers/DebounceWithLoadash';
import DebounceWithFunction from './Debouncers/DebounceWithFunction'
function App() {
  return (
    <BrowserRouter> 
       <Routes>
       <Route  exact path='/'    element={<MyHome />} />
       <Route   exact path='/setTimeoutDebounce'        element={<DebounceWithSetTimeout />}  />
       <Route   exact path='/DebounceWithInput'        element={<InputDebounce />}  />
       <Route   exact path='/DebounceLodash'        element={<LoadDebounce />}  />
       <Route   exact path='/DebounceWithFunction'        element={<DebounceWithFunction />}  />
       



       </Routes>
    </BrowserRouter>
      
  );
}

export default App;
