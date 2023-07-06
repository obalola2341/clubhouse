
import './App.css';
import Welcome from './pages/Welcome';
import Planlayouts from './pages/Layouts/Planlayouts';
import { BrowserRouter, Route, Routes,  Switch} from 'react-router-dom';
import Phoneconfirmation from './pages/Phoneconfirmation';
import Codeconfirm from './pages/Codeconfirm';
import NotificationArea from './pages/NotificationArea';
import Applayouts from './pages/Layouts/Planlayouts';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
             
              
               
                  <Applayouts>
                    <Routes>
                      <Route exact path="Home" element ={<Home/>}/>
                      <Route exact path="/explore" element ={<Explore/>}/>
                      <Route exact path="/profile" element ={<Profile/>}/>
                    </Routes>
                  </Applayouts>
               
              
              <route exact path = {["/", "/invite"]}>
                <Planlayouts>
                    
                  <Routes>
                          
                    <Route exact path= "/" element ={<Welcome/>}/>
                    <Route exact path="/invite" element ={<Phoneconfirmation/>}/>
                    <Route exact path="/Codeconfirm" element ={<Codeconfirm/>}/>
                    <Route exact path="/NotificationArea" element ={<NotificationArea/>}/>
                    
                  </Routes>
                </Planlayouts>
              </route>
             
        </BrowserRouter>
      
    </div>
  );
}

export default App;
