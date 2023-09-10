import logo from './logo.svg';
import './App.css';
import './input.css';
import {Routes,Route} from "react-router-dom";
// import LandingPage from "./page/LandingPage";
import LandingPage from './page/Landingpage';
import DetailsPage from './page/DetailsPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div class= 'bg-gradient-to-b from-indigo-500 to-blue-500 h-screen'> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/details' element={<DetailsPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
