import {BrowserRouter,Routes,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
