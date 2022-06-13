import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import DirectionGuide from './screens/DirectionGuide';
import DestinationReached from './screens/DestinationReached';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/direction-guide" element={<DirectionGuide />}/>
          <Route path="/destination-reached" element={<DestinationReached />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
