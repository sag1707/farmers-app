// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AddCrop from './components/crops/AddCrop';
import Navbar from './components/navbar/Navbar';
import Crop from './components/crops/Crop';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
// import Profile from './components/Profile/Profile';




function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar />
       <Switch>
       {/* <Route exact path = '/profile' component ={Profile} /> */}
         <Route exact path = '/' component ={Home} />
         <Route exact path = '/login' component ={LoginUser} />
         <Route exact path = '/crop' component ={Crop} />
         <Route exact path = '/addcrop' component ={AddCrop} />
         <Route exact path = '/register' component ={RegisterUser} />
       </Switch>
     </BrowserRouter>
    
     
    </>
  );
}


export default App;
